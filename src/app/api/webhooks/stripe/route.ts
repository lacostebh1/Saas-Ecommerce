import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/server/stripe";
import { sendServerEvent as sendMetaEvent } from "@/server/analytics/meta";
import { sendServerEvent as sendTikTokEvent } from "@/server/analytics/tiktok";
import { sendEmail, orderConfirmationHtml } from "@/server/email";
import { store } from "@/server/db";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";
import { captureError } from "@/server/monitoring";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !secret) {
    return NextResponse.json({ error: "Missing signature/secret" }, { status: 400 });
  }

  const payload = await req.text();
  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(payload, signature, secret);
  } catch (err) {
    captureError(err, { tags: { area: "stripe-webhook" } });
    return NextResponse.json(
      { error: `Invalid signature: ${(err as Error).message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const amount = (session.amount_total ?? 0) / 100;
    const currency = (session.currency ?? "eur").toUpperCase();
    const email = session.customer_details?.email ?? undefined;

    const orderId = session.id;
    const userId = session.client_reference_id ?? session.metadata?.userId ?? undefined;
    const shippingDetails = session.collected_information?.shipping_details ?? null;
    store.orders.set(orderId, {
      id: orderId,
      userId,
      email: email ?? "unknown@local",
      status: "paid",
      totalCents: session.amount_total ?? 0,
      currency,
      items: [],
      shipping: shippingDetails
        ? {
            name: shippingDetails.name ?? "",
            line1: shippingDetails.address?.line1 ?? "",
            line2: shippingDetails.address?.line2 ?? undefined,
            postalCode: shippingDetails.address?.postal_code ?? "",
            city: shippingDetails.address?.city ?? "",
            country: shippingDetails.address?.country ?? ""
          }
        : undefined,
      paymentProvider: "stripe",
      externalId: session.id,
      createdAt: new Date().toISOString()
    });

    if (email) {
      await sendEmail({
        to: email,
        subject: `Ta commande ${site.name} est confirmée 🎉`,
        html: orderConfirmationHtml({
          customerName: session.customer_details?.name ?? undefined,
          orderId,
          totalFormatted: formatPrice(session.amount_total ?? 0, currency)
        })
      });
    }

    await Promise.allSettled([
      sendMetaEvent({
        eventName: "Purchase",
        eventId: session.id,
        value: amount,
        currency,
        email
      }),
      sendTikTokEvent({
        eventName: "CompletePayment",
        eventId: session.id,
        value: amount,
        currency,
        email
      })
    ]);
  }

  return NextResponse.json({ received: true });
}

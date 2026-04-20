import { NextResponse } from "next/server";
import { captureOrder } from "@/server/paypal";
import { site } from "@/lib/site";
import { store } from "@/server/db";
import { getCurrentUser } from "@/server/auth";
import { captureError } from "@/server/monitoring";
import { sendEmail, orderConfirmationHtml } from "@/server/email";
import { formatPrice } from "@/lib/format";

type PayPalCapture = {
  id: string;
  payer?: { email_address?: string; name?: { given_name?: string; surname?: string } };
  purchase_units?: {
    amount?: { value?: string; currency_code?: string };
    shipping?: {
      name?: { full_name?: string };
      address?: {
        address_line_1?: string;
        address_line_2?: string;
        admin_area_2?: string;
        postal_code?: string;
        country_code?: string;
      };
    };
  }[];
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  if (!token) {
    return NextResponse.redirect(`${site.url}/panier`);
  }

  let capture: PayPalCapture;
  try {
    capture = (await captureOrder(token)) as PayPalCapture;
  } catch (err) {
    captureError(err, { tags: { area: "paypal-capture" }, extra: { token } });
    return NextResponse.redirect(`${site.url}/panier?error=paypal`);
  }

  const user = await getCurrentUser();
  const unit = capture.purchase_units?.[0];
  const email = capture.payer?.email_address;
  const totalCents = unit?.amount?.value
    ? Math.round(parseFloat(unit.amount.value) * 100)
    : 0;
  const currency = unit?.amount?.currency_code ?? "EUR";

  store.orders.set(capture.id, {
    id: capture.id,
    userId: user?.id,
    email: email ?? "unknown@local",
    status: "paid",
    totalCents,
    currency,
    items: [],
    shipping: unit?.shipping
      ? {
          name: unit.shipping.name?.full_name ?? "",
          line1: unit.shipping.address?.address_line_1 ?? "",
          line2: unit.shipping.address?.address_line_2,
          postalCode: unit.shipping.address?.postal_code ?? "",
          city: unit.shipping.address?.admin_area_2 ?? "",
          country: unit.shipping.address?.country_code ?? ""
        }
      : undefined,
    paymentProvider: "paypal",
    externalId: capture.id,
    createdAt: new Date().toISOString()
  });

  if (email) {
    await sendEmail({
      to: email,
      subject: `Ta commande ${site.name} est confirmée 🎉`,
      html: orderConfirmationHtml({
        customerName: capture.payer?.name?.given_name,
        orderId: capture.id,
        totalFormatted: formatPrice(totalCents, currency)
      })
    });
  }

  return NextResponse.redirect(`${site.url}/checkout/merci?paypal=${token}`);
}

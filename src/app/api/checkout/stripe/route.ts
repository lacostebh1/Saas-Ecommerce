import { NextResponse } from "next/server";
import { z } from "zod";
import { getStripe } from "@/server/stripe";
import { getProduct } from "@/lib/catalog";
import { site } from "@/lib/site";
import { getCurrentUser } from "@/server/auth";

const itemSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().min(1).max(20)
});

const bodySchema = z.object({
  items: z.array(itemSchema).min(1),
  customer: z
    .object({
      email: z.string().email().optional()
    })
    .partial()
    .optional()
});

export async function POST(req: Request) {
  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const line_items = parsed.data.items.map((i) => {
    const product = getProduct(
      // productId is the stable id; we find by slug fallback if it matches.
      // Here productId === product.id, and catalog uses the same id for slug.
      i.productId
    );
    if (!product) throw new Error(`Produit introuvable: ${i.productId}`);
    return {
      quantity: i.quantity,
      price_data: {
        currency: product.currency.toLowerCase(),
        unit_amount: product.priceCents,
        product_data: {
          name: product.name,
          description: product.tagline,
          metadata: { productId: product.id }
        }
      }
    };
  });

  const currentUser = await getCurrentUser();
  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    customer_email: currentUser?.email ?? parsed.data.customer?.email,
    client_reference_id: currentUser?.id,
    payment_method_types: ["card"],
    success_url: `${site.url}/checkout/merci?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${site.url}/panier`,
    shipping_address_collection: { allowed_countries: ["FR", "BE", "CH", "LU", "MC"] },
    phone_number_collection: { enabled: true },
    automatic_tax: { enabled: false },
    allow_promotion_codes: true,
    metadata: currentUser ? { userId: currentUser.id } : undefined
  });

  return NextResponse.json({ url: session.url });
}

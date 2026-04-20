import { NextResponse } from "next/server";
import { z } from "zod";
import { createOrder } from "@/server/paypal";
import { getProduct } from "@/lib/catalog";
import { captureError } from "@/server/monitoring";

const body = z.object({
  items: z
    .array(z.object({ productId: z.string(), quantity: z.number().int().min(1) }))
    .min(1)
});

export async function POST(req: Request) {
  const parsed = body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const items = parsed.data.items.map((i) => {
    const product = getProduct(i.productId);
    if (!product) throw new Error(`Produit introuvable: ${i.productId}`);
    return {
      name: product.name,
      quantity: i.quantity,
      unitAmount: product.priceCents
    };
  });

  try {
    const order = await createOrder(items, "EUR");
    const approveUrl = order.links.find((l) => l.rel === "approve")?.href;
    if (!approveUrl) {
      return NextResponse.json({ error: "No approve URL" }, { status: 500 });
    }
    return NextResponse.json({ url: approveUrl });
  } catch (err) {
    captureError(err, { tags: { area: "paypal-create" } });
    return NextResponse.json({ error: "PayPal error" }, { status: 502 });
  }
}

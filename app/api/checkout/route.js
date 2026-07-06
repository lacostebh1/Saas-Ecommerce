import { NextResponse } from 'next/server';

// Stripe-ready checkout: activates automatically when STRIPE_SECRET_KEY is set.
// Without a key, the order falls back to cash-on-delivery confirmation.
export async function POST(req) {
  const { orderId, quantity = 1, origin } = await req.json();
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json({ cod: true, message: 'Paiement en ligne bientôt disponible — commande enregistrée en paiement à la livraison.' });
  }
  const site = origin || 'https://www.smartrobotmo.com';
  const params = new URLSearchParams({
    mode: 'payment',
    'line_items[0][price_data][currency]': 'eur',
    'line_items[0][price_data][product_data][name]': 'SmartBot One — Robot humanoïde intelligent',
    'line_items[0][price_data][unit_amount]': '5990',
    'line_items[0][quantity]': String(Math.min(Math.max(parseInt(quantity) || 1, 1), 5)),
    success_url: `${site}/?success=1&order=${orderId}`,
    cancel_url: `${site}/?canceled=1`,
    'metadata[orderId]': orderId,
  });
  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });
  const session = await res.json();
  if (session.url) return NextResponse.json({ url: session.url });
  return NextResponse.json({ error: 'Stripe indisponible', detail: session.error?.message }, { status: 502 });
}

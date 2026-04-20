import { site } from "@/lib/site";

const PAYPAL_BASE =
  process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !secret) throw new Error("PayPal credentials manquants.");
  const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");
  const res = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials",
    cache: "no-store"
  });
  if (!res.ok) throw new Error(`PayPal token error: ${res.status}`);
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

export type PayPalOrderItem = { name: string; quantity: number; unitAmount: number };

export async function createOrder(items: PayPalOrderItem[], currency = "EUR") {
  const token = await getAccessToken();
  const total = items.reduce((s, i) => s + i.unitAmount * i.quantity, 0);
  const res = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: (total / 100).toFixed(2),
            breakdown: {
              item_total: {
                currency_code: currency,
                value: (total / 100).toFixed(2)
              }
            }
          },
          items: items.map((i) => ({
            name: i.name,
            quantity: String(i.quantity),
            unit_amount: {
              currency_code: currency,
              value: (i.unitAmount / 100).toFixed(2)
            }
          }))
        }
      ],
      application_context: {
        brand_name: site.name,
        return_url: `${site.url}/api/checkout/paypal/capture`,
        cancel_url: `${site.url}/panier`
      }
    })
  });
  if (!res.ok) throw new Error(`PayPal create order error: ${res.status}`);
  return (await res.json()) as {
    id: string;
    links: { rel: string; href: string; method: string }[];
  };
}

export async function captureOrder(orderId: string) {
  const token = await getAccessToken();
  const res = await fetch(
    `${PAYPAL_BASE}/v2/checkout/orders/${orderId}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
  if (!res.ok) throw new Error(`PayPal capture error: ${res.status}`);
  return res.json();
}

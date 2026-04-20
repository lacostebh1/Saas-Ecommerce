import { sha256 } from "./hash";

type ServerEvent = {
  eventName: "Purchase" | "InitiateCheckout" | "AddToCart" | "ViewContent" | "Lead";
  eventId: string;
  value?: number;
  currency?: string;
  email?: string;
  phone?: string;
  clientIp?: string;
  userAgent?: string;
  eventSourceUrl?: string;
};

export async function sendServerEvent(event: ServerEvent): Promise<void> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CONVERSIONS_API_TOKEN;
  if (!pixelId || !token) {
    console.info("[meta] skip (missing env)", event.eventName);
    return;
  }

  const url = new URL(`https://graph.facebook.com/v20.0/${pixelId}/events`);
  url.searchParams.set("access_token", token);
  const testCode = process.env.META_TEST_EVENT_CODE;

  const payload = {
    data: [
      {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        action_source: "website",
        event_source_url: event.eventSourceUrl,
        user_data: {
          em: sha256(event.email) ? [sha256(event.email)!] : undefined,
          ph: sha256(event.phone) ? [sha256(event.phone)!] : undefined,
          client_ip_address: event.clientIp,
          client_user_agent: event.userAgent
        },
        custom_data:
          event.value !== undefined
            ? { value: event.value, currency: event.currency ?? "EUR" }
            : undefined
      }
    ],
    ...(testCode ? { test_event_code: testCode } : {})
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      console.warn("[meta] non-ok", res.status, await res.text());
    }
  } catch (err) {
    console.warn("[meta] error", err);
  }
}

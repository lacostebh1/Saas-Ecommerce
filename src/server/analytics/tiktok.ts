import { sha256 } from "./hash";

type ServerEvent = {
  eventName:
    | "CompletePayment"
    | "InitiateCheckout"
    | "AddToCart"
    | "ViewContent"
    | "Contact";
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
  const pixel = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
  const token = process.env.TIKTOK_EVENTS_API_TOKEN;
  if (!pixel || !token) {
    console.info("[tiktok] skip (missing env)", event.eventName);
    return;
  }

  const payload = {
    event_source: "web",
    event_source_id: pixel,
    data: [
      {
        event: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        user: {
          email: sha256(event.email),
          phone: sha256(event.phone),
          ip: event.clientIp,
          user_agent: event.userAgent
        },
        properties:
          event.value !== undefined
            ? { value: event.value, currency: event.currency ?? "EUR" }
            : undefined,
        page: event.eventSourceUrl ? { url: event.eventSourceUrl } : undefined
      }
    ]
  };

  try {
    const res = await fetch("https://business-api.tiktok.com/open_api/v1.3/event/track/", {
      method: "POST",
      headers: {
        "Access-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      console.warn("[tiktok] non-ok", res.status, await res.text());
    }
  } catch (err) {
    console.warn("[tiktok] error", err);
  }
}

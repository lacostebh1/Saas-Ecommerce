"use client";

type Item = { id: string; name: string; priceCents: number; quantity: number };

type Params = {
  value?: number;
  currency?: string;
  items?: Item[];
  eventId?: string;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (name: string, params?: Record<string, unknown>) => void };
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackViewContent(item: Item) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "ViewContent", {
    value: item.priceCents / 100,
    currency: "EUR",
    content_ids: [item.id]
  });
  window.ttq?.track("ViewContent", {
    value: item.priceCents / 100,
    currency: "EUR",
    content_id: item.id
  });
  window.gtag?.("event", "view_item", {
    currency: "EUR",
    value: item.priceCents / 100,
    items: [{ item_id: item.id, item_name: item.name, price: item.priceCents / 100 }]
  });
}

export function trackAddToCart(item: Item) {
  if (typeof window === "undefined") return;
  const value = (item.priceCents * item.quantity) / 100;
  window.fbq?.("track", "AddToCart", {
    value,
    currency: "EUR",
    content_ids: [item.id]
  });
  window.ttq?.track("AddToCart", { value, currency: "EUR", content_id: item.id });
  window.gtag?.("event", "add_to_cart", {
    currency: "EUR",
    value,
    items: [
      {
        item_id: item.id,
        item_name: item.name,
        quantity: item.quantity,
        price: item.priceCents / 100
      }
    ]
  });
}

export function trackBeginCheckout({ items, value }: Required<Pick<Params, "items" | "value">>) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "InitiateCheckout", { value, currency: "EUR" });
  window.ttq?.track("InitiateCheckout", { value, currency: "EUR" });
  window.gtag?.("event", "begin_checkout", {
    currency: "EUR",
    value,
    items: items.map((i) => ({
      item_id: i.id,
      item_name: i.name,
      quantity: i.quantity,
      price: i.priceCents / 100
    }))
  });
}

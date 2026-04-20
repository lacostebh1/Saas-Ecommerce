import { site } from "./site";

export function formatPrice(cents: number, currency: string = site.currency) {
  return new Intl.NumberFormat(site.locale, {
    style: "currency",
    currency
  }).format(cents / 100);
}

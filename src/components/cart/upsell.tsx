"use client";

import { useCart } from "@/lib/cart/store";
import { products } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";

export function CartUpsell() {
  const items = useCart((s) => s.items);
  const add = useCart((s) => s.add);
  const cartIds = new Set(items.map((i) => i.productId));
  const suggestions = products.filter((p) => !cartIds.has(p.id)).slice(0, 2);
  if (items.length === 0 || suggestions.length === 0) return null;
  return (
    <div className="rounded-blob bg-brand-peach/40 p-6">
      <h2 className="text-lg font-bold">Tu aimeras aussi</h2>
      <p className="text-sm text-brand-ink/70">
        Ajoute un pack de cartes pour prolonger l'aventure.
      </p>
      <ul className="mt-4 space-y-3">
        {suggestions.map((p) => (
          <li
            key={p.id}
            className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-xs text-brand-ink/60">{p.tagline}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{formatPrice(p.priceCents)}</p>
              <Button size="sm" variant="secondary" onClick={() => add(p, 1)}>
                + Ajouter
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

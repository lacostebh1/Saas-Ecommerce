"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart/store";
import { trackAddToCart } from "@/lib/analytics/track";
import type { Product } from "@/lib/types";

export function AddToCart({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="inline-flex items-center rounded-full border border-brand-ink/15 bg-white">
        <button
          type="button"
          className="h-11 w-11 text-lg"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Diminuer"
        >
          −
        </button>
        <span className="w-8 text-center font-semibold">{qty}</span>
        <button
          type="button"
          className="h-11 w-11 text-lg"
          onClick={() => setQty((q) => q + 1)}
          aria-label="Augmenter"
        >
          +
        </button>
      </div>
      <Button
        size="lg"
        onClick={() => {
          add(product, qty);
          trackAddToCart({
            id: product.id,
            name: product.name,
            priceCents: product.priceCents,
            quantity: qty
          });
          setAdded(true);
          setTimeout(() => setAdded(false), 2000);
        }}
      >
        {added ? "Ajouté ✓" : "Ajouter au panier"}
      </Button>
    </div>
  );
}

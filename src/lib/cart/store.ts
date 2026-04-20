"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/types";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  priceCents: number;
  quantity: number;
  image?: string;
};

type CartState = {
  items: CartItem[];
  add: (product: Product, quantity?: number) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  subtotalCents: () => number;
  itemCount: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (product, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((i) => i.productId === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === product.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              )
            };
          }
          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                slug: product.slug,
                name: product.name,
                priceCents: product.priceCents,
                quantity,
                image: product.images[0]?.src
              }
            ]
          };
        }),
      remove: (productId) =>
        set((state) => ({ items: state.items.filter((i) => i.productId !== productId) })),
      setQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items
            .map((i) => (i.productId === productId ? { ...i, quantity } : i))
            .filter((i) => i.quantity > 0)
        })),
      clear: () => set({ items: [] }),
      subtotalCents: () =>
        get().items.reduce((s, i) => s + i.priceCents * i.quantity, 0),
      itemCount: () => get().items.reduce((s, i) => s + i.quantity, 0)
    }),
    { name: "smartrobotmo-cart", version: 1 }
  )
);

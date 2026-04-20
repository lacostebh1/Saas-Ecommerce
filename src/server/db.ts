/**
 * Couche d'abstraction DB minimale.
 *
 * Remplacer par Prisma / Drizzle quand DATABASE_URL sera branchée.
 * Pour l'instant, un stockage in-memory partagé par process — suffisant pour
 * développer les flows (auth, admin, commandes) en local.
 */

import type { Product } from "@/lib/types";
import { products as seedProducts } from "@/lib/catalog";

export type User = {
  id: string;
  email: string;
  name?: string;
  passwordHash: string;
  role: "customer" | "admin";
  createdAt: string;
};

export type Order = {
  id: string;
  userId?: string;
  email: string;
  status: "pending" | "paid" | "shipped" | "delivered" | "refunded" | "cancelled";
  totalCents: number;
  currency: string;
  items: { productId: string; name: string; priceCents: number; quantity: number }[];
  shipping?: {
    name: string;
    line1: string;
    line2?: string;
    postalCode: string;
    city: string;
    country: string;
    trackingNumber?: string;
    carrier?: string;
  };
  paymentProvider: "stripe" | "paypal";
  externalId: string;
  createdAt: string;
};

type Store = {
  users: Map<string, User>;
  orders: Map<string, Order>;
  products: Map<string, Product>;
  sessions: Map<string, { userId: string; expiresAt: number }>;
};

const globalForStore = globalThis as unknown as { __store?: Store };

function createStore(): Store {
  const products = new Map(seedProducts.map((p) => [p.id, { ...p }]));
  return {
    users: new Map(),
    orders: new Map(),
    products,
    sessions: new Map()
  };
}

export const store: Store = globalForStore.__store ?? (globalForStore.__store = createStore());

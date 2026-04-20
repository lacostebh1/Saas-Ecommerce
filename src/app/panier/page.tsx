"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { useCart } from "@/lib/cart/store";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const items = useCart((s) => s.items);
  const subtotalCents = useCart((s) => s.subtotalCents());
  const setQuantity = useCart((s) => s.setQuantity);
  const remove = useCart((s) => s.remove);

  if (items.length === 0) {
    return (
      <Container className="py-16 text-center">
        <h1 className="text-3xl font-bold">Ton panier est vide</h1>
        <p className="mt-2 text-brand-ink/70">
          Ajoute un robot ou un pack de cartes pour démarrer l'aventure.
        </p>
        <LinkButton href="/produit" size="lg" className="mt-6">
          Voir la boutique
        </LinkButton>
      </Container>
    );
  }

  return (
    <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_380px]">
      <div>
        <h1 className="text-3xl font-bold">Mon panier</h1>
        <ul className="mt-6 divide-y divide-brand-ink/10 rounded-blob bg-white shadow-soft">
          {items.map((i) => (
            <li key={i.productId} className="flex gap-4 p-4">
              <div className="h-20 w-20 flex-none rounded-xl bg-gradient-to-br from-brand-pink/30 to-brand-sky/30" />
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <Link href={`/produit/${i.slug}`} className="font-semibold hover:underline">
                    {i.name}
                  </Link>
                  <button
                    type="button"
                    onClick={() => remove(i.productId)}
                    className="text-xs text-brand-ink/60 hover:underline"
                  >
                    Retirer
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-brand-ink/15">
                    <button
                      type="button"
                      className="h-9 w-9"
                      onClick={() => setQuantity(i.productId, i.quantity - 1)}
                      aria-label="Diminuer"
                    >
                      −
                    </button>
                    <span className="w-6 text-center">{i.quantity}</span>
                    <button
                      type="button"
                      className="h-9 w-9"
                      onClick={() => setQuantity(i.productId, i.quantity + 1)}
                      aria-label="Augmenter"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-semibold">
                    {formatPrice(i.priceCents * i.quantity)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <aside className="h-fit rounded-blob bg-brand-mint/40 p-6">
        <h2 className="text-xl font-bold">Récap</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt>Sous-total</dt>
            <dd className="font-semibold">{formatPrice(subtotalCents)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Livraison</dt>
            <dd className="font-semibold">Offerte</dd>
          </div>
        </dl>
        <div className="mt-4 flex justify-between border-t border-brand-ink/20 pt-4 text-lg font-bold">
          <span>Total</span>
          <span>{formatPrice(subtotalCents)}</span>
        </div>
        <LinkButton href="/checkout" size="lg" className="mt-6 w-full">
          Passer commande
        </LinkButton>
        <p className="mt-3 text-center text-xs text-brand-ink/60">
          Paiement sécurisé · 30 jours satisfait ou remboursé
        </p>
      </aside>
    </Container>
  );
}

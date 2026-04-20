"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart/store";
import { formatPrice } from "@/lib/format";

export default function CheckoutPage() {
  const items = useCart((s) => s.items);
  const subtotal = useCart((s) => s.subtotalCents());
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState<"stripe" | "paypal">("stripe");
  const [error, setError] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <Container className="py-16 text-center">
        <p>Ton panier est vide.</p>
      </Container>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const customer = Object.fromEntries(formData.entries());
    try {
      const endpoint =
        method === "stripe" ? "/api/checkout/stripe" : "/api/checkout/paypal";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customer })
      });
      if (!res.ok) throw new Error("Échec du checkout");
      const data = (await res.json()) as { url?: string };
      if (data.url) {
        window.location.href = data.url;
      } else {
        router.push("/checkout/merci");
      }
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  }

  return (
    <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_380px]">
      <form onSubmit={onSubmit} className="space-y-8">
        <section>
          <h2 className="text-xl font-bold">Contact</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Email" name="email" type="email" required />
            <Field label="Téléphone" name="phone" type="tel" />
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold">Adresse de livraison</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Prénom" name="firstName" required />
            <Field label="Nom" name="lastName" required />
            <Field label="Adresse" name="line1" required className="sm:col-span-2" />
            <Field label="Complément" name="line2" className="sm:col-span-2" />
            <Field label="Code postal" name="postalCode" required />
            <Field label="Ville" name="city" required />
            <Field label="Pays" name="country" defaultValue="France" required />
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold">Paiement</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <PaymentOption
              id="stripe"
              label="Carte bancaire / Apple Pay / Google Pay"
              checked={method === "stripe"}
              onChange={() => setMethod("stripe")}
            />
            <PaymentOption
              id="paypal"
              label="PayPal"
              checked={method === "paypal"}
              onChange={() => setMethod("paypal")}
            />
          </div>
          <p className="mt-3 text-xs text-brand-ink/60">
            Tu seras redirigé·e vers {method === "stripe" ? "Stripe" : "PayPal"} pour
            finaliser le paiement en toute sécurité.
          </p>
        </section>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button size="lg" className="w-full" disabled={loading}>
          {loading ? "Redirection..." : `Payer ${formatPrice(subtotal)}`}
        </Button>
      </form>
      <aside className="h-fit space-y-4 rounded-blob bg-brand-mint/40 p-6">
        <h2 className="text-lg font-bold">Commande</h2>
        <ul className="divide-y divide-brand-ink/10">
          {items.map((i) => (
            <li key={i.productId} className="flex justify-between gap-4 py-3 text-sm">
              <span>
                {i.name} × {i.quantity}
              </span>
              <span className="font-semibold">
                {formatPrice(i.priceCents * i.quantity)}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between border-t border-brand-ink/20 pt-3 text-sm">
          <span>Sous-total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Livraison</span>
          <span>Offerte</span>
        </div>
        <div className="flex justify-between border-t border-brand-ink/20 pt-3 text-lg font-bold">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
      </aside>
    </Container>
  );
}

function Field({
  label,
  className,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block text-sm ${className ?? ""}`}>
      <span className="font-semibold">{label}</span>
      <input
        {...props}
        className="mt-1 w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3"
      />
    </label>
  );
}

function PaymentOption({
  id,
  label,
  checked,
  onChange
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 ${
        checked ? "border-brand-ink bg-white" : "border-brand-ink/15"
      }`}
    >
      <input
        type="radio"
        name="payment"
        value={id}
        checked={checked}
        onChange={onChange}
      />
      <span className="text-sm font-semibold">{label}</span>
    </label>
  );
}

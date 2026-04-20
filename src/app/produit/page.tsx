import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Rating } from "@/components/ui/rating";
import { products } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";

export const metadata = {
  title: "Boutique",
  description: "Le robot éducatif de dessin et ses packs de cartes."
};

export default function ShopPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold">Boutique</h1>
      <p className="mt-2 max-w-2xl text-brand-ink/70">
        Le robot et ses accessoires — tout ce qu'il faut pour une aventure créative
        sans fin.
      </p>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/produit/${p.slug}`}
            className="group rounded-blob bg-white p-6 shadow-soft ring-1 ring-brand-ink/5 transition hover:-translate-y-1"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-pink/30 to-brand-sky/30" />
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold group-hover:underline">{p.name}</h2>
                <p className="mt-1 text-sm text-brand-ink/70">{p.tagline}</p>
              </div>
              <span className="whitespace-nowrap font-semibold">
                {formatPrice(p.priceCents)}
              </span>
            </div>
            <Rating value={p.rating} count={p.reviewsCount} size="sm" className="mt-3" />
          </Link>
        ))}
      </div>
    </Container>
  );
}

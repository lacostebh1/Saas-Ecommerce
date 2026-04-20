import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Rating } from "@/components/ui/rating";
import { Section } from "@/components/ui/section";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ProductGallery } from "@/components/product/product-gallery";
import { AddToCart } from "@/components/product/add-to-cart";
import { Reviews } from "@/components/sections/reviews";
import { products, getProduct, faq } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description
  };
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.id,
    brand: { "@type": "Brand", name: "SmartRobotMo" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount
    },
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency,
      price: (product.priceCents / 100).toFixed(2),
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${site.url}/produit/${product.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container className="grid gap-10 py-12 lg:grid-cols-2">
        <ProductGallery images={product.images} />
        <div className="space-y-5">
          <span className="inline-block rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold">
            {product.ageRange}
          </span>
          <h1 className="text-3xl font-bold sm:text-4xl">{product.name}</h1>
          <p className="text-lg text-brand-ink/80">{product.tagline}</p>
          <Rating value={product.rating} count={product.reviewsCount} />
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold">{formatPrice(product.priceCents)}</span>
            {product.compareAtCents && (
              <span className="text-lg text-brand-ink/50 line-through">
                {formatPrice(product.compareAtCents)}
              </span>
            )}
          </div>
          <p className="text-brand-ink/80">{product.description}</p>
          <ul className="space-y-2">
            {product.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand-lavender" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
          <AddToCart product={product} />
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-ink/70">
            <li>🚚 Livraison gratuite FR</li>
            <li>🔁 30 jours satisfait ou remboursé</li>
            <li>🛡️ Garantie 2 ans</li>
          </ul>
        </div>
      </Container>

      <Section tone="peach">
        <h2 className="text-2xl font-bold">Caractéristiques</h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.specs.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-4 shadow-soft">
              <dt className="text-xs uppercase tracking-wide text-brand-ink/60">
                {s.label}
              </dt>
              <dd className="mt-1 font-semibold">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Reviews />

      <Section tone="white">
        <h2 className="text-2xl font-bold">Questions fréquentes</h2>
        <div className="mt-6">
          <FaqAccordion items={faq} />
        </div>
      </Section>
    </>
  );
}

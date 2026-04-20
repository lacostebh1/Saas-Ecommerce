import { LinkButton } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { mainProduct } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";

export function FinalCta() {
  return (
    <Section tone="lavender">
      <div className="rounded-blob bg-brand-ink px-8 py-14 text-center text-white sm:px-16">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Offre un cadeau qui développe plus qu'un sourire.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          SmartRobot, c'est l'éveil par le dessin — sans écran. Livraison gratuite,
          30 jours satisfait ou remboursé.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <LinkButton
            href={`/produit/${mainProduct.slug}`}
            size="lg"
            variant="secondary"
          >
            Acheter · {formatPrice(mainProduct.priceCents)}
          </LinkButton>
          <LinkButton href="/comment-ca-marche" size="lg" variant="ghost" className="text-white hover:bg-white/10">
            Comment ça marche →
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}

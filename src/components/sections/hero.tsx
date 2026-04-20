import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Rating } from "@/components/ui/rating";
import { mainProduct } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-pink/40 via-brand-peach/30 to-brand-yellow/40">
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center gap-6">
          <span className="w-fit rounded-full bg-brand-mint px-4 py-1 text-sm font-semibold text-brand-ink">
            Nouveau · {mainProduct.ageRange}
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {mainProduct.tagline}
          </h1>
          <p className="max-w-xl text-lg text-brand-ink/80">
            Le robot éducatif qui donne envie aux enfants de poser le crayon sur le
            papier. Sans écran, sans frustration — juste le plaisir de créer.
          </p>
          <Rating value={mainProduct.rating} count={mainProduct.reviewsCount} />
          <div className="flex flex-wrap items-center gap-4">
            <LinkButton href={`/produit/${mainProduct.slug}`} size="lg">
              Acheter · {formatPrice(mainProduct.priceCents)}
            </LinkButton>
            <LinkButton href="/comment-ca-marche" variant="ghost" size="lg">
              Voir la vidéo →
            </LinkButton>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-ink/70">
            <li>🚚 Livraison gratuite</li>
            <li>🔁 30 jours satisfait ou remboursé</li>
            <li>🛡️ Garantie 2 ans</li>
          </ul>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute -left-4 top-10 h-32 w-32 rounded-full bg-brand-sky/60 blur-2xl" />
          <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-brand-bubblegum/60 blur-2xl" />
          <div className="relative aspect-square w-full max-w-md rounded-blob bg-white/60 p-6 shadow-soft backdrop-blur">
            <HeroIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
      <circle cx="200" cy="210" r="150" fill="#BDB2FF" />
      <rect x="130" y="150" width="140" height="110" rx="30" fill="#FFFFFF" />
      <circle cx="170" cy="200" r="14" fill="#2D2A4A" />
      <circle cx="230" cy="200" r="14" fill="#2D2A4A" />
      <path
        d="M160 240c10 12 30 18 40 18s30-6 40-18"
        stroke="#2D2A4A"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="190" y="110" width="20" height="40" rx="10" fill="#FFB5C5" />
      <circle cx="200" cy="105" r="10" fill="#FFB5C5" />
      <rect x="110" y="280" width="180" height="40" rx="12" fill="#CAFFBF" />
      <path
        d="M140 300 q20 -15 40 0 t40 0 t40 0"
        stroke="#2D2A4A"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

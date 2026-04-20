import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const nav = [
  { href: "/produit", label: "Le robot" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/benefices", label: "Bénéfices" },
  { href: "/contact", label: "Support" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-ink/5 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="Accueil">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-ink/80 hover:text-brand-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LinkButton href="/panier" variant="ghost" size="sm">
            Panier
          </LinkButton>
          <LinkButton href="/produit" size="sm">
            Acheter
          </LinkButton>
        </div>
      </Container>
    </header>
  );
}

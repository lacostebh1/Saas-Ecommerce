import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Boutique",
    links: [
      { href: "/produit", label: "Le robot" },
      { href: "/comment-ca-marche", label: "Comment ça marche" },
      { href: "/benefices", label: "Bénéfices éducatifs" }
    ]
  },
  {
    title: "Aide",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/suivi", label: "Suivi de commande" },
      { href: "/retours", label: "Retours & échanges" }
    ]
  },
  {
    title: "Légal",
    links: [
      { href: "/legal/cgv", label: "CGV" },
      { href: "/legal/confidentialite", label: "Confidentialité" },
      { href: "/legal/mentions", label: "Mentions légales" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-brand-ink/5 bg-brand-yellow/40">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-brand-ink/70">{site.description}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-ink/60">
              {col.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col items-center justify-between gap-2 border-t border-brand-ink/10 py-6 text-xs text-brand-ink/60 md:flex-row">
        <span>
          © {new Date().getFullYear()} {site.company.legalName}. Tous droits réservés.
        </span>
        <span>Fait avec ❤️ pour les artistes en herbe.</span>
      </Container>
    </footer>
  );
}

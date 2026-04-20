import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { faq } from "@/lib/catalog";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact & support",
  description: "Une question ? Notre équipe répond sous 24h."
};

export default function ContactPage() {
  return (
    <Container className="grid gap-12 py-16 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold">On est là pour toi</h1>
        <p className="mt-3 text-brand-ink/70">
          Une question sur une commande, un produit ou un retour ? Écris-nous, on
          répond en moins de 24h (ouvrés).
        </p>
        <dl className="mt-8 space-y-3 text-sm">
          <div>
            <dt className="font-semibold">Email support</dt>
            <dd>
              <a className="underline" href={`mailto:${site.company.supportEmail}`}>
                {site.company.supportEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Horaires</dt>
            <dd>Lundi → Vendredi · 9h-18h</dd>
          </div>
        </dl>
      </div>
      <form
        action="/api/contact"
        method="POST"
        className="space-y-4 rounded-blob bg-white p-6 shadow-soft"
      >
        <div>
          <label className="text-sm font-semibold" htmlFor="name">Nom</label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-brand-ink/15 px-4 py-3"
          />
        </div>
        <div>
          <label className="text-sm font-semibold" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-brand-ink/15 px-4 py-3"
          />
        </div>
        <div>
          <label className="text-sm font-semibold" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-xl border border-brand-ink/15 px-4 py-3"
          />
        </div>
        <button className="w-full rounded-full bg-brand-ink py-3 font-semibold text-white">
          Envoyer
        </button>
      </form>
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold">Questions fréquentes</h2>
        <div className="mt-4">
          <FaqAccordion items={faq} />
        </div>
      </div>
    </Container>
  );
}

import { Container } from "@/components/ui/container";
import { fetchStatus } from "@/server/shipping";

export const metadata = { title: "Suivi de colis" };

export default async function TrackingPage({
  params
}: {
  params: Promise<{ tracking: string }>;
}) {
  const { tracking } = await params;
  const status = await fetchStatus(tracking);
  return (
    <Container className="max-w-2xl py-12">
      <h1 className="text-3xl font-bold">Suivi de ton colis</h1>
      <p className="mt-2 text-sm text-brand-ink/70">N° {tracking}</p>
      <div className="mt-8 rounded-blob bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink/60">
          Statut actuel
        </p>
        <p className="mt-1 text-2xl font-bold">{labelFor(status.status)}</p>
        <ul className="mt-6 space-y-3">
          {status.events.map((e, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="flex-none text-brand-ink/60">
                {new Date(e.date).toLocaleString("fr-FR")}
              </span>
              <span>{e.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

function labelFor(s: string) {
  return (
    {
      label_created: "Étiquette créée",
      in_transit: "En transit",
      out_for_delivery: "En cours de livraison",
      delivered: "Livré"
    } as Record<string, string>
  )[s] ?? s;
}

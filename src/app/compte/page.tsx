import { redirect } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getCurrentUser } from "@/server/auth";
import { store } from "@/server/db";
import { formatPrice } from "@/lib/format";

export const metadata = { title: "Mon compte" };

export default async function AccountPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const orders = [...store.orders.values()]
    .filter((o) => o.userId === user.id)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <Container className="py-12">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Bonjour {user.name ?? user.email} 👋</h1>
          <p className="text-sm text-brand-ink/70">{user.email}</p>
        </div>
        <form action="/api/auth/logout" method="POST">
          <button className="text-sm underline">Déconnexion</button>
        </form>
      </div>

      <h2 className="mt-10 text-xl font-bold">Mes commandes</h2>
      {orders.length === 0 ? (
        <p className="mt-2 text-sm text-brand-ink/70">Aucune commande pour le moment.</p>
      ) : (
        <ul className="mt-4 divide-y divide-brand-ink/10 rounded-blob bg-white shadow-soft">
          {orders.map((o) => (
            <li key={o.id} className="flex items-center justify-between gap-4 p-4">
              <div>
                <p className="font-semibold">Commande #{o.id.slice(-8)}</p>
                <p className="text-xs text-brand-ink/60">
                  {new Date(o.createdAt).toLocaleDateString("fr-FR")} · {o.status}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{formatPrice(o.totalCents, o.currency)}</p>
                {o.shipping?.trackingNumber && (
                  <Link
                    href={`/suivi/${o.shipping.trackingNumber}`}
                    className="text-xs underline"
                  >
                    Suivre mon colis
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

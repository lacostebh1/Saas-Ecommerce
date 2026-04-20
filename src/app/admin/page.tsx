import { store } from "@/server/db";
import { formatPrice } from "@/lib/format";

export default function AdminDashboard() {
  const orders = [...store.orders.values()];
  const paid = orders.filter((o) => o.status !== "pending" && o.status !== "cancelled");
  const revenue = paid.reduce((s, o) => s + o.totalCents, 0);
  const stats = [
    { label: "Commandes payées", value: paid.length },
    { label: "Chiffre d'affaires", value: formatPrice(revenue) },
    { label: "Utilisateurs", value: store.users.size },
    { label: "Produits", value: store.products.size }
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-blob bg-white p-6 shadow-soft">
          <p className="text-xs uppercase tracking-wide text-brand-ink/60">{s.label}</p>
          <p className="mt-2 text-2xl font-bold">{s.value}</p>
        </div>
      ))}
    </div>
  );
}

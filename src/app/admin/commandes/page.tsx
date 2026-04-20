import { store } from "@/server/db";
import { formatPrice } from "@/lib/format";

export default function AdminOrders() {
  const orders = [...store.orders.values()].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );
  return (
    <div>
      <h2 className="text-2xl font-bold">Commandes</h2>
      {orders.length === 0 ? (
        <p className="mt-4 text-sm text-brand-ink/60">Aucune commande.</p>
      ) : (
        <table className="mt-4 w-full overflow-hidden rounded-blob bg-white shadow-soft">
          <thead className="bg-brand-mint/40 text-left text-sm">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Email</th>
              <th className="p-3">Total</th>
              <th className="p-3">Statut</th>
              <th className="p-3">Provider</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-brand-ink/10">
                <td className="p-3 font-mono">{o.id.slice(-8)}</td>
                <td className="p-3">{o.email}</td>
                <td className="p-3">{formatPrice(o.totalCents, o.currency)}</td>
                <td className="p-3">{o.status}</td>
                <td className="p-3">{o.paymentProvider}</td>
                <td className="p-3">
                  {new Date(o.createdAt).toLocaleString("fr-FR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

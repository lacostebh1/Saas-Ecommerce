import { store } from "@/server/db";
import { formatPrice } from "@/lib/format";

export default function AdminProducts() {
  const products = [...store.products.values()];
  return (
    <div>
      <h2 className="text-2xl font-bold">Produits</h2>
      <p className="text-sm text-brand-ink/60">
        Modifie les prix et stocks en direct (stockage mémoire pour l'instant — DB à brancher).
      </p>
      <ul className="mt-6 divide-y divide-brand-ink/10 rounded-blob bg-white shadow-soft">
        {products.map((p) => (
          <li key={p.id} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 p-4">
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-xs text-brand-ink/60">{p.slug}</p>
            </div>
            <span className="font-semibold">{formatPrice(p.priceCents)}</span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                p.inStock ? "bg-brand-mint" : "bg-brand-pink/60"
              }`}
            >
              {p.inStock ? "En stock" : "Rupture"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function Admin() {
  const [key, setKey] = useState('');
  const [orders, setOrders] = useState(null);
  const [err, setErr] = useState('');

  async function load(e) {
    e && e.preventDefault();
    setErr('');
    const res = await fetch('/api/orders?key=' + encodeURIComponent(key));
    if (!res.ok) { setErr('Clé invalide.'); setOrders(null); return; }
    const data = await res.json();
    setOrders(data.orders || []);
  }

  return (
    <div className="admin">
      <h1 style={{ marginBottom: 20 }}>📦 SmartRobotMo — Commandes</h1>
      <form onSubmit={load} style={{ marginBottom: 24 }}>
        <input type="password" placeholder="Clé admin" value={key} onChange={(e) => setKey(e.target.value)} />
        <button>Afficher les commandes</button>
        {err && <span style={{ color: '#ff6b6b', marginLeft: 12 }}>{err}</span>}
      </form>
      {orders && (
        <>
          <p style={{ marginBottom: 12 }}>
            {orders.length} commande(s) — CA total : {orders.reduce((s, o) => s + (o.total || 0), 0).toFixed(2)} €
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>ID</th><th>Date</th><th>Client</th><th>Contact</th><th>Adresse</th><th>Qté</th><th>Total</th><th>Paiement</th><th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{new Date(o.createdAt).toLocaleString('fr-FR')}</td>
                    <td>{o.customer?.name}</td>
                    <td>{o.customer?.phone}<br />{o.customer?.email}</td>
                    <td>{o.customer?.address}, {o.customer?.zip} {o.customer?.city}, {o.customer?.country}</td>
                    <td>{o.quantity}</td>
                    <td>{o.total?.toFixed(2)} €</td>
                    <td><span className={'pill ' + o.payment}>{o.payment === 'cod' ? 'Livraison' : 'Carte'}</span></td>
                    <td>{o.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {orders.length === 0 && <p style={{ marginTop: 16, color: '#9fb0d8' }}>Aucune commande pour le moment.</p>}
        </>
      )}
    </div>
  );
}

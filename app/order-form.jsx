'use client';

import { useEffect, useState } from 'react';

const PRODUCT = { content_id: 'smartbot-one', content_type: 'product', content_name: 'SmartBot One' };

function trackPixels(event, value) {
  const payload = { ...PRODUCT, value, currency: 'EUR' };
  try {
    if (window.ttq) window.ttq.track(event.tiktok, payload);
    if (window.fbq) window.fbq('track', event.meta, { value, currency: 'EUR' });
  } catch {}
}

export default function OrderForm() {
  useEffect(() => {
    // Card payment return: fire purchase once
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === '1' && !sessionStorage.getItem('srm_tracked')) {
      const total = parseFloat(localStorage.getItem('srm_pending_total')) || 59.9;
      trackPixels({ tiktok: 'CompletePayment', meta: 'Purchase' }, total);
      sessionStorage.setItem('srm_tracked', '1');
      localStorage.removeItem('srm_pending_total');
    }
  }, []);
  const [payment, setPayment] = useState('cod');
  const [state, setState] = useState({ loading: false, msg: '', ok: false });
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', zip: '', country: 'France', quantity: 1,
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setState({ loading: true, msg: '', ok: false });
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, payment }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur');
      if (payment === 'card') {
        trackPixels({ tiktok: 'InitiateCheckout', meta: 'InitiateCheckout' }, data.total);
        localStorage.setItem('srm_pending_total', String(data.total));
        const co = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderId: data.orderId, quantity: form.quantity, origin: window.location.origin }),
        });
        const coData = await co.json();
        if (coData.url) { window.location.href = coData.url; return; }
        setState({ loading: false, ok: true, msg: `✅ Commande ${data.orderId} enregistrée ! ${coData.message || 'Vous réglerez à la livraison.'}` });
        return;
      }
      trackPixels({ tiktok: 'PlaceAnOrder', meta: 'Purchase' }, data.total);
      setState({ loading: false, ok: true, msg: `✅ Merci ! Commande ${data.orderId} confirmée (${data.total.toFixed(2)} €, paiement à la livraison). Nous vous contactons sous 24h pour valider l'expédition.` });
    } catch (err) {
      setState({ loading: false, ok: false, msg: '❌ ' + (err.message || 'Erreur, réessayez.') });
    }
  }

  return (
    <form className="order-form" onSubmit={submit}>
      <h3>🤖 SmartBot One — 59,90 € <small style={{ color: '#9fb0d8', fontWeight: 400 }}>(livraison offerte)</small></h3>
      <div className="form-row">
        <div>
          <label>Nom complet *</label>
          <input required value={form.name} onChange={set('name')} placeholder="Prénom Nom" autoComplete="name" />
        </div>
        <div>
          <label>Téléphone *</label>
          <input required value={form.phone} onChange={set('phone')} placeholder="+33 6 12 34 56 78" autoComplete="tel" />
        </div>
      </div>
      <label>E-mail (suivi de commande)</label>
      <input type="email" value={form.email} onChange={set('email')} placeholder="vous@email.com" autoComplete="email" />
      <label>Adresse *</label>
      <input required value={form.address} onChange={set('address')} placeholder="N° et rue" autoComplete="street-address" />
      <div className="form-row">
        <div>
          <label>Ville *</label>
          <input required value={form.city} onChange={set('city')} autoComplete="address-level2" />
        </div>
        <div>
          <label>Code postal</label>
          <input value={form.zip} onChange={set('zip')} autoComplete="postal-code" />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label>Pays *</label>
          <select value={form.country} onChange={set('country')}>
            <option>France</option>
            <option>Belgique</option>
            <option>Espagne</option>
            <option>Italie</option>
            <option>Pays-Bas</option>
            <option>Pologne</option>
          </select>
        </div>
        <div>
          <label>Quantité</label>
          <select value={form.quantity} onChange={set('quantity')}>
            <option value={1}>1 robot — 59,90 €</option>
            <option value={2}>2 robots — 119,80 €</option>
            <option value={3}>3 robots — 179,70 €</option>
          </select>
        </div>
      </div>
      <label>Mode de paiement</label>
      <div className="pay-options">
        <div className={'pay-option' + (payment === 'cod' ? ' selected' : '')} onClick={() => setPayment('cod')}>
          💶 À la livraison
        </div>
        <div className={'pay-option' + (payment === 'card' ? ' selected' : '')} onClick={() => setPayment('card')}>
          💳 Carte bancaire
        </div>
      </div>
      <button className="submit-btn" disabled={state.loading}>
        {state.loading ? 'Traitement…' : 'Confirmer ma commande ✅'}
      </button>
      {state.msg && <p className={'form-msg ' + (state.ok ? 'ok' : 'err')}>{state.msg}</p>}
      <p className="secure-note">🔒 Données protégées — utilisées uniquement pour votre livraison.</p>
    </form>
  );
}

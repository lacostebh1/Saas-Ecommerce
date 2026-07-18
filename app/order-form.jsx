'use client';

import { useEffect, useState } from 'react';
import { useLang } from './lang-context';

const PRODUCT = { content_id: 'smartbot-one', content_type: 'product', content_name: 'SmartBot One' };
const COUNTRIES = ['France', 'Belgique', 'Espagne', 'Italie', 'Pays-Bas', 'Pologne', 'Roumanie', 'Bulgarie'];
const eur = (n) => n.toFixed(2).replace('.', ',') + ' €';

function trackPixels(event, value) {
  const payload = { ...PRODUCT, value, currency: 'EUR' };
  try {
    if (window.ttq) window.ttq.track(event.tiktok, payload);
    if (window.fbq) window.fbq('track', event.meta, { value, currency: 'EUR' });
  } catch {}
}

export default function OrderForm() {
  const { lang, t } = useLang();
  const tf = t.form;
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
        body: JSON.stringify({ ...form, payment, lang }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || tf.error);
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
        setState({ loading: false, ok: true, msg: tf.okCard(data.orderId) });
        return;
      }
      trackPixels({ tiktok: 'PlaceAnOrder', meta: 'Purchase' }, data.total);
      setState({ loading: false, ok: true, msg: tf.okCod(data.orderId, eur(data.total)) });
    } catch (err) {
      setState({ loading: false, ok: false, msg: '❌ ' + (err.message || tf.error) });
    }
  }

  return (
    <form className="order-form" onSubmit={submit}>
      <h3>{tf.title} <small style={{ color: '#9fb0d8', fontWeight: 400 }}>{tf.freeShip}</small></h3>
      <div className="form-row">
        <div>
          <label>{tf.name}</label>
          <input required value={form.name} onChange={set('name')} placeholder={tf.namePh} autoComplete="name" />
        </div>
        <div>
          <label>{tf.phone}</label>
          <input required value={form.phone} onChange={set('phone')} placeholder="+33 6 12 34 56 78" autoComplete="tel" />
        </div>
      </div>
      <label>{tf.email}</label>
      <input type="email" value={form.email} onChange={set('email')} placeholder="mail@mail.com" autoComplete="email" />
      <label>{tf.address}</label>
      <input required value={form.address} onChange={set('address')} placeholder={tf.addressPh} autoComplete="street-address" />
      <div className="form-row">
        <div>
          <label>{tf.city}</label>
          <input required value={form.city} onChange={set('city')} autoComplete="address-level2" />
        </div>
        <div>
          <label>{tf.zip}</label>
          <input value={form.zip} onChange={set('zip')} autoComplete="postal-code" />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label>{tf.country}</label>
          <select value={form.country} onChange={set('country')}>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{tf.countries[c]}</option>
            ))}
          </select>
        </div>
        <div>
          <label>{tf.qty}</label>
          <select value={form.quantity} onChange={set('quantity')}>
            {[1, 2, 3].map((n) => (
              <option key={n} value={n}>{tf.qtyOpt(n, eur(n * 59.9))}</option>
            ))}
          </select>
        </div>
      </div>
      <label>{tf.payment}</label>
      <div className="pay-options">
        <div className={'pay-option' + (payment === 'cod' ? ' selected' : '')} onClick={() => setPayment('cod')}>
          {tf.cod}
        </div>
        <div className={'pay-option' + (payment === 'card' ? ' selected' : '')} onClick={() => setPayment('card')}>
          {tf.card}
        </div>
      </div>
      <button className="submit-btn" disabled={state.loading}>
        {state.loading ? tf.processing : tf.submit}
      </button>
      {state.msg && <p className={'form-msg ' + (state.ok ? 'ok' : 'err')}>{state.msg}</p>}
      <p className="secure-note">{tf.secure}</p>
    </form>
  );
}

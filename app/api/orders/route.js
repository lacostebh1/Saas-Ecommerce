import { NextResponse } from 'next/server';
import { addOrder, getOrders, newOrderId, deleteOrderBlob } from '../../../lib/orders';

const PRICE = 59.9;
const ADMIN_KEY = process.env.ADMIN_KEY || 'smartrobotmo2026';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, address, city, zip, country, quantity, payment } = body;
    if (!name || !phone || !address || !city || !country) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 });
    }
    const qty = Math.min(Math.max(parseInt(quantity) || 1, 1), 5);
    const order = {
      id: newOrderId(),
      createdAt: new Date().toISOString(),
      product: 'SmartBot One — Robot humanoïde intelligent',
      unitPrice: PRICE,
      quantity: qty,
      total: Math.round(qty * PRICE * 100) / 100,
      currency: 'EUR',
      payment: payment === 'card' ? 'card' : 'cod',
      status: payment === 'card' ? 'awaiting_payment' : 'confirmed_cod',
      customer: { name, email: email || '', phone, address, city, zip: zip || '', country },
    };
    await addOrder(order);
    return NextResponse.json({ ok: true, orderId: order.id, total: order.total, payment: order.payment });
  } catch (e) {
    return NextResponse.json({ error: 'Erreur serveur, réessayez.' }, { status: 500 });
  }
}

export async function GET(req) {
  const key = new URL(req.url).searchParams.get('key');
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }
  const orders = await getOrders();
  return NextResponse.json({ orders });
}

export async function DELETE(req) {
  const url = new URL(req.url);
  if (url.searchParams.get('key') !== ADMIN_KEY) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }
  const id = url.searchParams.get('id');
  if (!id || id.includes('/') || id.includes('\\') || id.includes('..')) {
    return NextResponse.json({ error: 'id invalide' }, { status: 400 });
  }
  try {
    const deleted = await deleteOrderBlob(id);
    return NextResponse.json({ ok: true, deleted });
  } catch (e) {
    return NextResponse.json({ error: 'Suppression impossible' }, { status: 500 });
  }
}

// Order storage: Vercel Blob (private) in production, in-memory fallback in dev.
// On Vercel, the SDK authenticates via BLOB_READ_WRITE_TOKEN or BLOB_STORE_ID + OIDC.
import { put, get, list } from '@vercel/blob';

const BLOB_KEY = 'orders/orders.json';
const memory = { orders: [] };

const hasBlob = () => !!(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);

async function readBody(res) {
  if (!res) return null;
  if (typeof res.text === 'function') return res.text();
  const stream = res.body || res.stream || res;
  if (typeof ReadableStream !== 'undefined' && stream instanceof ReadableStream) {
    return new Response(stream).text();
  }
  return null;
}

export async function getOrders() {
  if (!hasBlob()) return memory.orders;
  try {
    const res = await get(BLOB_KEY);
    const text = await readBody(res);
    if (!text) return [];
    return JSON.parse(text);
  } catch {
    return [];
  }
}

export async function addOrder(order) {
  if (!hasBlob()) {
    memory.orders.unshift(order);
    return order;
  }
  const orders = await getOrders();
  orders.unshift(order);
  await put(BLOB_KEY, JSON.stringify(orders, null, 2), {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  return order;
}

export function newOrderId() {
  return 'SRM-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
}

// Order storage: Vercel Blob (private, one blob per order) in production, in-memory fallback in dev.
// On Vercel, the SDK authenticates via BLOB_READ_WRITE_TOKEN or BLOB_STORE_ID + OIDC.
import { put, get, list, del } from '@vercel/blob';

const PREFIX = 'orders/';
const memory = { orders: [] };

const hasBlob = () => !!(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);

async function readOrder(pathname) {
  try {
    const res = await get(pathname, { access: 'private' });
    if (!res || res.statusCode !== 200 || !res.stream) return null;
    const text = await new Response(res.stream).text();
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function getOrders() {
  if (!hasBlob()) return memory.orders;
  try {
    const { blobs } = await list({ prefix: PREFIX, limit: 500 });
    const sorted = blobs
      .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
      .slice(0, 200);
    const results = await Promise.all(sorted.map((b) => readOrder(b.pathname)));
    return results
      .flatMap((o) => (Array.isArray(o) ? o : [o]))
      .filter((o) => o && o.id);
  } catch {
    return [];
  }
}

export async function addOrder(order) {
  if (!hasBlob()) {
    memory.orders.unshift(order);
    return order;
  }
  await put(`${PREFIX}${order.id}.json`, JSON.stringify(order, null, 2), {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false,
  });
  return order;
}

export async function deleteOrderBlob(name) {
  // name: order id (SRM-…) or a literal filename like orders.json
  const file = name.endsWith('.json') ? name : `${name}.json`;
  await del(`${PREFIX}${file}`);
  return `${PREFIX}${file}`;
}

export function newOrderId() {
  return 'SRM-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
}

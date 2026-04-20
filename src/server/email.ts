import { site } from "@/lib/site";

type SendArgs = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail({ to, subject, html }: SendArgs): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM ?? `${site.name} <hello@smartrobotmo.com>`;
  if (!apiKey) {
    console.info("[email] skip (no RESEND_API_KEY)", { to, subject });
    return;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ from, to, subject, html })
    });
    if (!res.ok) console.warn("[email] non-ok", res.status, await res.text());
  } catch (err) {
    console.warn("[email] error", err);
  }
}

export function orderConfirmationHtml(args: {
  customerName?: string;
  orderId: string;
  totalFormatted: string;
}): string {
  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:auto;padding:24px;background:#FFFBF2;border-radius:16px">
      <h1 style="color:#2D2A4A">Merci ${args.customerName ?? ""} !</h1>
      <p>Ta commande <strong>#${args.orderId.slice(-8)}</strong> a bien été reçue.</p>
      <p>Total : <strong>${args.totalFormatted}</strong></p>
      <p>Nous préparons ton colis et t'enverrons un numéro de suivi dès l'expédition.</p>
      <p style="color:#666">— L'équipe ${site.name}</p>
    </div>
  `;
}

export function abandonedCartHtml(firstName?: string): string {
  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:auto;padding:24px">
      <h1>Tu as oublié quelque chose ${firstName ?? ""} ?</h1>
      <p>Ton panier t'attend. Reviens finaliser ta commande — livraison gratuite !</p>
      <p><a href="${site.url}/panier" style="background:#2D2A4A;color:#fff;padding:12px 20px;border-radius:999px;text-decoration:none">Reprendre ma commande</a></p>
    </div>
  `;
}

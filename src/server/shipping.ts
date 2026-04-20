/**
 * Shim transporteur — branchement Sendcloud / Shippo / La Poste à venir.
 *
 * Pour l'instant, on génère un numéro de suivi local et on renvoie un statut
 * simulé. Remplacer `trackingUrl` + `fetchStatus` par un appel API réel.
 */

import { randomBytes } from "node:crypto";

export function generateTrackingNumber(): string {
  return "SR" + randomBytes(6).toString("hex").toUpperCase();
}

export function trackingUrl(carrier: string | undefined, trackingNumber: string) {
  if (carrier === "colissimo") {
    return `https://www.laposte.fr/outils/suivre-vos-envois?code=${trackingNumber}`;
  }
  if (carrier === "ups") {
    return `https://www.ups.com/track?tracknum=${trackingNumber}`;
  }
  return `/suivi/${trackingNumber}`;
}

export type TrackingStatus = {
  status: "label_created" | "in_transit" | "out_for_delivery" | "delivered";
  events: { date: string; label: string }[];
};

export async function fetchStatus(trackingNumber: string): Promise<TrackingStatus> {
  // Stub : en prod, appeler l'API transporteur avec process.env.SHIPPING_API_KEY.
  return {
    status: "in_transit",
    events: [
      { date: new Date().toISOString(), label: `Étiquette créée (${trackingNumber})` },
      { date: new Date().toISOString(), label: "Colis pris en charge par le transporteur" }
    ]
  };
}

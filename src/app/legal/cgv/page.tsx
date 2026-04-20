import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata = { title: "CGV" };

export default function CgvPage() {
  return (
    <Container className="prose max-w-3xl py-12">
      <h1>Conditions Générales de Vente</h1>
      <p>
        Les présentes CGV régissent les ventes conclues sur {site.url} entre{" "}
        {site.company.legalName} (le « Vendeur ») et tout client particulier (le «
        Client »).
      </p>
      <h2>1. Produits</h2>
      <p>
        Les caractéristiques essentielles de chaque produit sont décrites sur sa fiche.
        Les photographies sont non contractuelles.
      </p>
      <h2>2. Prix & paiement</h2>
      <p>
        Les prix sont indiqués en euros TTC. Le paiement s'effectue par carte bancaire
        (via Stripe) ou PayPal, sécurisé par SSL.
      </p>
      <h2>3. Livraison</h2>
      <p>
        Livraison en France métropolitaine sous 3-5 jours ouvrés. Frais de port offerts
        dès le premier achat.
      </p>
      <h2>4. Rétractation</h2>
      <p>
        Le Client dispose d'un délai de 30 jours à compter de la réception pour
        retourner le produit sans justification. Remboursement intégral sous 14 jours.
      </p>
      <h2>5. Garanties</h2>
      <p>
        Garantie légale de conformité (2 ans) et garantie des vices cachés s'appliquent.
      </p>
      <h2>6. Données personnelles</h2>
      <p>
        Les données sont traitées conformément à la{" "}
        <a href="/legal/confidentialite">politique de confidentialité</a>.
      </p>
      <h2>7. Litiges</h2>
      <p>Droit applicable : français. En cas de litige, médiation possible via la plateforme européenne ODR.</p>
      <p>
        <em>Contact : {site.company.supportEmail}</em>
      </p>
    </Container>
  );
}

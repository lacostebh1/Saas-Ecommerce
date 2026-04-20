import { Container } from "@/components/ui/container";

export const metadata = { title: "Retours & échanges" };

export default function ReturnsPage() {
  return (
    <Container className="prose max-w-3xl py-12">
      <h1>Retours & échanges</h1>
      <p>Tu disposes de 30 jours après réception pour nous retourner ton produit.</p>
      <ol>
        <li>Écris-nous à support@smartrobotmo.com avec ton n° de commande.</li>
        <li>Tu reçois une étiquette de retour prépayée.</li>
        <li>Une fois le colis reçu, remboursement intégral sous 14 jours.</li>
      </ol>
      <p>Le produit doit être retourné dans son emballage d'origine.</p>
    </Container>
  );
}

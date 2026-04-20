import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata = { title: "Politique de confidentialité" };

export default function PrivacyPage() {
  return (
    <Container className="prose max-w-3xl py-12">
      <h1>Politique de confidentialité</h1>
      <p>
        {site.company.legalName} respecte ta vie privée et se conforme au RGPD.
      </p>
      <h2>Données collectées</h2>
      <ul>
        <li>Compte : email, nom, mot de passe (haché).</li>
        <li>Commandes : adresse, téléphone, produits achetés.</li>
        <li>Mesure d'audience : cookies Meta, TikTok, Google Analytics (avec consentement).</li>
      </ul>
      <h2>Finalités</h2>
      <ul>
        <li>Traiter les commandes et assurer le service après-vente.</li>
        <li>Améliorer nos produits et mesurer nos pubs.</li>
        <li>T'envoyer, avec ton accord, des offres personnalisées.</li>
      </ul>
      <h2>Durée de conservation</h2>
      <p>3 ans après la dernière interaction, ou selon obligations comptables (10 ans).</p>
      <h2>Tes droits</h2>
      <p>
        Accès, rectification, effacement, opposition, portabilité : écris-nous à{" "}
        <a href={`mailto:${site.company.supportEmail}`}>{site.company.supportEmail}</a>.
      </p>
      <h2>Cookies</h2>
      <p>
        Tu peux modifier tes préférences via la bannière cookies (vide le localStorage
        pour la réafficher).
      </p>
    </Container>
  );
}

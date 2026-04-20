import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata = { title: "Mentions légales" };

export default function LegalPage() {
  return (
    <Container className="prose max-w-3xl py-12">
      <h1>Mentions légales</h1>
      <p>
        <strong>Éditeur :</strong> {site.company.legalName}
      </p>
      <p>
        <strong>Contact :</strong>{" "}
        <a href={`mailto:${site.company.email}`}>{site.company.email}</a>
      </p>
      <p>
        <strong>Hébergement :</strong> Vercel Inc., 440 N Barranca Ave, Covina, CA 91723, USA.
      </p>
      <p>
        <strong>Directeur de la publication :</strong> {site.company.legalName}.
      </p>
    </Container>
  );
}

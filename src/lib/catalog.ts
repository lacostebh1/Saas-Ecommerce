import type { Product, Review, FaqItem } from "./types";

export const products: Product[] = [
  {
    id: "robot-dessin",
    slug: "robot-dessin",
    name: "SmartRobot — Robot éducatif de dessin",
    tagline: "Apprends à dessiner en t'amusant",
    description:
      "Un robot interactif qui apprend aux enfants de 3 à 8 ans à dessiner pas à pas grâce à des cartes magiques. Développe créativité, coordination et concentration.",
    priceCents: 4990,
    compareAtCents: 6990,
    currency: "EUR",
    images: [
      { src: "/images/robot-hero.svg", alt: "Robot de dessin de face" },
      { src: "/images/robot-side.svg", alt: "Robot de dessin de côté" },
      { src: "/images/robot-cards.svg", alt: "Cartes d'apprentissage" }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    ageRange: "3-8 ans",
    rating: 4.8,
    reviewsCount: 212,
    bullets: [
      "Apprend à dessiner étape par étape",
      "Reconnaît formes, animaux et couleurs",
      "Sans écran : stimule la motricité fine",
      "Livré avec 60 cartes d'apprentissage",
      "Rechargeable USB-C, 6h d'autonomie"
    ],
    specs: [
      { label: "Âge recommandé", value: "3 à 8 ans" },
      { label: "Autonomie", value: "6 heures" },
      { label: "Cartes incluses", value: "60" },
      { label: "Langues", value: "FR, EN, ES" },
      { label: "Garantie", value: "2 ans" }
    ],
    inStock: true
  },
  {
    id: "pack-cartes-animaux",
    slug: "pack-cartes-animaux",
    name: "Pack cartes — Animaux du monde",
    tagline: "30 cartes supplémentaires",
    description: "Étends l'univers de ton robot avec 30 nouvelles cartes animaux.",
    priceCents: 1490,
    currency: "EUR",
    images: [{ src: "/images/pack-animaux.svg", alt: "Pack cartes animaux" }],
    ageRange: "3-8 ans",
    rating: 4.9,
    reviewsCount: 48,
    bullets: ["30 cartes animaux", "Compatible SmartRobot", "Étui de rangement inclus"],
    specs: [
      { label: "Nombre de cartes", value: "30" },
      { label: "Thème", value: "Animaux" }
    ],
    inStock: true
  },
  {
    id: "pack-cartes-lettres",
    slug: "pack-cartes-lettres",
    name: "Pack cartes — Lettres & Chiffres",
    tagline: "Apprendre en dessinant",
    description: "26 lettres + 10 chiffres pour apprendre à tracer en s'amusant.",
    priceCents: 1490,
    currency: "EUR",
    images: [{ src: "/images/pack-lettres.svg", alt: "Pack cartes lettres" }],
    ageRange: "4-8 ans",
    rating: 4.7,
    reviewsCount: 33,
    bullets: ["36 cartes lettres & chiffres", "Majuscules + minuscules", "Compatible SmartRobot"],
    specs: [
      { label: "Nombre de cartes", value: "36" },
      { label: "Thème", value: "Lettres & Chiffres" }
    ],
    inStock: true
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const mainProduct = products[0];

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Camille L.",
    city: "Lyon",
    rating: 5,
    title: "Ma fille adore !",
    body: "Ma fille de 4 ans passe des heures à dessiner avec son robot. Elle a appris à dessiner un chat en 2 jours !",
    date: "2025-02-14"
  },
  {
    id: "r2",
    author: "Thomas R.",
    city: "Paris",
    rating: 5,
    title: "Enfin une alternative à l'écran",
    body: "On cherchait un jouet éducatif sans écran. C'est parfait, bien pensé et solide.",
    date: "2025-01-28"
  },
  {
    id: "r3",
    author: "Sophie M.",
    city: "Bordeaux",
    rating: 4,
    title: "Très bon produit",
    body: "Les cartes sont belles, le robot réagit bien. Juste un peu cher mais la qualité est là.",
    date: "2025-03-02"
  },
  {
    id: "r4",
    author: "Emilie D.",
    rating: 5,
    title: "Cadeau parfait",
    body: "Offert à mon neveu pour ses 5 ans, succès total. Les parents sont ravis aussi.",
    date: "2025-03-18"
  }
];

export const faq: FaqItem[] = [
  {
    question: "À partir de quel âge ?",
    answer:
      "Le SmartRobot est conçu pour les enfants de 3 à 8 ans. Les plus petits adorent observer, les plus grands reproduisent les tracés."
  },
  {
    question: "Combien de cartes sont incluses ?",
    answer: "60 cartes sont incluses dans la boîte, réparties en 6 thèmes (formes, animaux, objets...)."
  },
  {
    question: "Quelle est la durée de livraison ?",
    answer: "Livraison gratuite en France métropolitaine sous 3-5 jours ouvrés via Colissimo suivi."
  },
  {
    question: "Puis-je retourner le produit ?",
    answer: "Oui, vous disposez de 30 jours pour le retourner, sans justification. Remboursement intégral sous 14 jours."
  },
  {
    question: "Le robot est-il rechargeable ?",
    answer: "Oui, il se recharge en USB-C et offre 6 heures d'autonomie. Câble inclus."
  },
  {
    question: "Existe-t-il des packs de cartes supplémentaires ?",
    answer: "Oui, nous proposons des packs thématiques (animaux, lettres, véhicules...) disponibles dans la boutique."
  }
];

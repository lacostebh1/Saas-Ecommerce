export const site = {
  name: "SmartRobotMo",
  tagline: "Apprends à dessiner en t'amusant",
  description:
    "Le robot éducatif qui apprend aux enfants de 3 à 8 ans à dessiner, étape par étape, avec des cartes interactives.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr-FR",
  currency: "EUR",
  company: {
    legalName: "SMARTROBOTMO LTD",
    email: "hello@smartrobotmo.com",
    supportEmail: "support@smartrobotmo.com"
  },
  social: {
    instagram: "https://instagram.com/smartrobotmo",
    tiktok: "https://tiktok.com/@smartrobotmo"
  }
} as const;

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  priceCents: number;
  compareAtCents?: number;
  currency: "EUR";
  images: { src: string; alt: string }[];
  videoUrl?: string;
  ageRange: string;
  rating: number;
  reviewsCount: number;
  bullets: string[];
  specs: { label: string; value: string }[];
  inStock: boolean;
};

export type Review = {
  id: string;
  author: string;
  city?: string;
  rating: number;
  title: string;
  body: string;
  date: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

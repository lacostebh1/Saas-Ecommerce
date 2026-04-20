import type { MetadataRoute } from "next";
import { products } from "@/lib/catalog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/produit",
    "/comment-ca-marche",
    "/benefices",
    "/contact",
    "/panier",
    "/legal/cgv",
    "/legal/confidentialite",
    "/legal/mentions",
    "/retours",
    "/suivi"
  ];
  const now = new Date();
  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      priority: path === "" ? 1 : 0.6
    })),
    ...products.map((p) => ({
      url: `${site.url}/produit/${p.slug}`,
      lastModified: now,
      priority: 0.9
    }))
  ];
}

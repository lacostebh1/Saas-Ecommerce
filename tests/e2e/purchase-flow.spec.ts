import { test, expect } from "@playwright/test";

test("parcours : home → fiche produit → ajout panier", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.goto("/produit/robot-dessin");
  await expect(page.getByRole("heading", { name: /robot/i })).toBeVisible();
  await page.getByRole("button", { name: "Ajouter au panier" }).click();
  await expect(page.getByRole("button", { name: /Ajouté/ })).toBeVisible();

  await page.goto("/panier");
  await expect(page.getByText("Mon panier")).toBeVisible();
  await expect(page.getByText("Passer commande")).toBeVisible();
});

test("pages légales accessibles", async ({ page }) => {
  for (const path of ["/legal/cgv", "/legal/confidentialite", "/legal/mentions"]) {
    await page.goto(path);
    await expect(page.locator("h1")).toBeVisible();
  }
});

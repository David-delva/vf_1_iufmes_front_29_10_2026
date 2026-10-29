import { test, expect } from '@playwright/test';

const ADMIN_EMAIL = process.env.E2E_ADMIN_EMAIL || 'admin@healthuniversity.edu';
const ADMIN_PASSWORD = process.env.E2E_ADMIN_PASSWORD || 'Admin@2024';

test.describe('Admin', () => {
  test('an admin can log in and reach the dashboard', async ({ page }) => {
    await page.goto('/admin/login');

    await page.locator('input[type="email"]').fill(ADMIN_EMAIL);
    await page.locator('input[type="password"]').fill(ADMIN_PASSWORD);
    await page.getByRole('button', { name: /se connecter/i }).click();

    await page.waitForURL('**/admin');
    await expect(page.getByRole('heading', { name: 'Dashboard Admin' })).toBeVisible();
  });

  test('an admin can create and see a news article', async ({ page }) => {
    await page.goto('/admin/login');
    await page.locator('input[type="email"]').fill(ADMIN_EMAIL);
    await page.locator('input[type="password"]').fill(ADMIN_PASSWORD);
    await page.getByRole('button', { name: /se connecter/i }).click();
    await page.waitForURL('**/admin');

    await page.goto('/admin/news');
    await page.getByRole('button', { name: /nouvelle actualité/i }).click();

    const title = `Actualité E2E ${Date.now()}`;
    await page.locator('input[type="text"]').first().fill(title);
    const textareas = page.locator('textarea');
    await textareas.nth(0).fill("Résumé de test suffisamment long pour la validation.");
    await textareas
      .nth(1)
      .fill('Contenu de test suffisamment long pour passer la validation minimale de cinquante caractères requise.');

    await page.getByRole('button', { name: /créer/i }).click();

    await expect(page.getByText(title)).toBeVisible({ timeout: 10_000 });
  });
});

import { test, expect } from '@playwright/test';

test.describe('Public pages', () => {
  test('home page loads without console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(String(err)));

    await page.goto('/');

    await expect(page).toHaveTitle(/IUFMES/);
    expect(errors).toEqual([]);
  });

  test('program detail page shows data from the API', async ({ page }) => {
    await page.goto('/programs/medecine');

    await expect(page.getByRole('heading', { name: 'Médecine Générale' })).toBeVisible();
    await expect(page.getByText('Corps Enseignant')).toBeVisible();
  });

  test('program detail page returns a friendly state for an unknown slug', async ({ page }) => {
    await page.goto('/programs/does-not-exist');

    await expect(page.getByText(/programme|introuvable|non trouv/i).first()).toBeVisible();
  });

  test('actualites page lists published news', async ({ page }) => {
    await page.goto('/actualites');

    await expect(page.getByText('Rentrée Académique 2024-2025')).toBeVisible();
  });
});

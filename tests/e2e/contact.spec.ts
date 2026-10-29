import { test, expect } from '@playwright/test';

test('a visitor can submit the contact form', async ({ page }) => {
  await page.goto('/contact');

  await page.locator('input[name="name"]').fill('Playwright E2E');
  await page.locator('input[name="email"]').fill(`e2e-${Date.now()}@example.com`);
  await page.locator('input[name="subject"]').fill('Test E2E automatisé');
  await page
    .locator('textarea[name="message"]')
    .fill('Message envoyé automatiquement par la suite de tests E2E Playwright.');

  await page.getByRole('button', { name: /envoyer/i }).click();

  await expect(page.getByText('Message envoyé avec succès')).toBeVisible();
});

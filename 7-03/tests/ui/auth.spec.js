const { test, expect } = require('@playwright/test');
const { email, password } = require('../../user');

test.describe('Авторизация на Netology', () => {
  test('Успешная авторизация', async ({ page }) => {
    await page.goto('/?modal=sign_in');

    await page.getByPlaceholder(/email/i).fill(email);
    await page.getByPlaceholder(/парол/i).fill(password);
    await page.getByRole('button', { name: /войти/i }).click();

    await expect(page).toHaveURL(/\/profile/);
    const heading = page.locator('h2').first();
    await expect(heading).toBeVisible();
    await expect(heading).not.toHaveText('');
  });

  test('Неуспешная авторизация с неверными данными', async ({ page }) => {
    await page.goto('/?modal=sign_in');

    await page.getByPlaceholder(/email/i).fill('invalid-user@example.com');
    await page.getByPlaceholder(/парол/i).fill('WrongPassword123!');
    await page.getByRole('button', { name: /войти/i }).click();

    await expect(
      page.getByText(/неверн|ошибк|не удалось|проверьте/i).first(),
    ).toBeVisible();
    await expect(page).not.toHaveURL(/\/profile/);
  });
});
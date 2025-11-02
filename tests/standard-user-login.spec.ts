import { test, expect } from '@playwright/test';

test.describe('Standard User Login', () => {
  test('Standard User Login (Happy Path)', async ({ page }) => {
    // Navigate to the Sauce Demo login page
    await page.goto('https://www.saucedemo.com/');

    // Enter username "standard_user" in the Username field
    await page.locator('[data-test="username"]').fill('standard_user');

    // Enter password "secret_sauce" in the Password field
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // Verify user is redirected to inventory page
    await expect(page.getByText('Products')).toBeVisible();

    // Verify products are displayed correctly
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await expect(page.locator('[data-test="inventory-item-name"]').first()).toBeVisible();
  });
});
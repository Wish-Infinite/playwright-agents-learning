import { test, expect } from '@playwright/test';

test.describe('Locked Out User Login', () => {
  test('Locked Out User Cannot Access System', async ({ page }) => {
    // Navigate to the Sauce Demo login page
    await page.goto('https://www.saucedemo.com/');

    // Enter username "locked_out_user" in the Username field
    await page.locator('[data-test="username"]').fill('locked_out_user');

    // Enter password "secret_sauce" in the Password field
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // Verify error message is displayed
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out')).toBeVisible();

    // Verify user remains on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
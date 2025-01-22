const { expect, test } = require('@playwright/test');
const LoginPage = require('../pages/login');



test('POM Login', async ({ page }) => {
  
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  const login = new LoginPage(page);

  await login.loginApp();

  // Verify successful login
  await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
});

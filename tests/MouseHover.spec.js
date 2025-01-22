const { test, expect } = require("@playwright/test");

test("Check mouse hover", async ({ page }) => {
  // Navigate to the target URL
  await page.goto("https://demo.automationtesting.in/Register.html");

  // Perform mouse hover action
  await page.locator("//a[normalize-space()='SwitchTo']").hover();

  // Click on the 'Alerts' option
  await page.locator("//a[normalize-space()='Alerts']").click();

  // Add an assertion to verify if the Alerts page is opened
  await expect(page).toHaveURL("https://demo.automationtesting.in/Alerts.html");

  await page.waitForTimeout(5000);
});

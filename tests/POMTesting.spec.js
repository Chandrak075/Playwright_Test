const { expect, test } = require("@playwright/test");
const POMLogin = require("../pages/POMLogin"); // Import the class with a different name to avoid conflict
const POMSignOut = require("../pages/POMSignOut");

test("POM test case execution", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    const loginPage = new POMLogin(page); // Use a different variable name for the instance
    await loginPage.LogIntoApplication(); // Call the method on the instance

    await expect(page.locator(".post-title")).toHaveText("Logged In Successfully");
    // Check if the login was successful by verifying the text of an element
   

    const SignOut = new POMSignOut(page);
    await SignOut.LogOutApplication();
    await expect(page.locator("//h2[normalize-space()='Test login']")).toHaveText("Test login");

    await page.waitForTimeout(3000);
    await page.close();
});

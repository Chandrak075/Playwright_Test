const { test, expect } = require("@playwright/test");
const TestData = require("../Datadriven.json");

const URLPath = "https://practicetestautomation.com/practice-test-login/";
const userLoc = "#username";
const passLoc = "#password";

test.describe("Data driven test", function () {
    TestData.forEach((data) => {
        test(`Login with user ${data.id}`, async ({ page }) => {
            await page.goto(URLPath);
            await page.locator(userLoc).fill(data.username);
            await page.locator(passLoc).fill(data.password);
            await page.locator("#submit").click();
            
            // Validate the error message
            await expect(page.locator("#error")).toHaveText("Your username is invalid!");

            // Wait for 3 seconds to observe the result (optional)
            await page.waitForTimeout(3000);
        });
    });
});


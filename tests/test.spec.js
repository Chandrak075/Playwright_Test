const { test, expect } = require("@playwright/test");

test("Invalid login attempts with wrong ID and Password", async ({ page }) => {

    //Initialize the test for 3 minutes
    // test.setTimeout(180000);

    // Navigate to the login page and Fill in the ID and Password
    await page.goto("https://qa-app-01.qventus.com/login?next=/");
    await page.locator("#idp-discovery-username").fill("BadUser");
    await page.locator("#idp-discovery-submit").click();
    await page.waitForSelector("label[for='okta-signin-password']");
    await page.locator("#okta-signin-password").fill("BadPassword");
    await page.locator("#okta-signin-submit").click(); 

    // Validation Check
    await expect(page.locator("div[role='alert'] p")).toHaveText("Unable to sign in");

    // Set timeout to 2 minutes
    await page.waitForTimeout(120000);
});



test.only("Handle Shadow DOM elements", async ({ page }) => {
    // await page.goto("https://books-pwakit.appspot.com/");
    // Select the input field inside shadow DOM and type text
    // await page.locator("book-app").locator("input#input").fill("Playwright Testing");

    await page.goto("https://www.cigna.com/medicare/")
    await page.waitForTimeout(2000)
    await page.locator("#zip-input-id #zip-input-id-leaf").fill("11002");
    await page.waitForTimeout(2000)
});



const { test, expect } = require("@playwright/test");

const PageURL = "https://www.google.com/";

test("Keyboard functions", async ({ page }) => {
    await page.goto(PageURL);

    // Fill the search input
    await page.locator(".gLFyf").fill("https://www.frenchconnection.com/");

    // Press Enter to perform the search
    // await page.keyboard.press("Enter");

    // Wait for the results to load
    // await page.waitForNavigation();

    // Select all text using Ctrl+A
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Control+V");

    for (let i = 0; i < 10; i++) {
        await page.keyboard.press("Backspace")
    }

    // Wait for 3 seconds to observe the results
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
});

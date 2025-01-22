const { test, expect } = require("@playwright/test");

test("Upload a file", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");

    // Ensure the file path uses double backslashes or forward slashes
    await page.locator("#imagesrc").setInputFiles("C:\\Users\\rafta\\Downloads\\50_Deep_Space_Backgrounds\\aaaa.jpeg");
    
    // Alternatively, use forward slashes
    // await page.locator("#imagesrc").setInputFiles("C:/Users/rafta/Downloads/50_Deep_Space_Backgrounds/aaaa.jpeg");

});

const { test, expect } = require("@playwright/test");
const TestData = require("../TestData.json"); // Simplified JSON import

test("Handle JSON file", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");

    // Fill in the form using data from the JSON file
    await page.locator("input[placeholder='First Name']").fill(TestData.firstname);
    await page.locator("input[placeholder='Last Name']").fill(TestData.lastname);
    await page.locator("textarea[ng-model='Adress']").fill(TestData.address); // Adjusted selector for accuracy
    await page.locator("input[type='email']").fill(TestData.email);
    await page.locator("input[type='tel']").fill(TestData.phone);
    await page.locator("input[value='Male']").check(); // Changed to 'check' for radio button

    // Fill in the password fields
    await page.locator("#firstpassword").fill(TestData.password);
    await page.locator("#secondpassword").fill(TestData.connpassword);

    // Optionally wait for 3 seconds to observe the result
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
});

const {test , expect} = require("@playwright/test");

test("Handle auto suggestion", async ({page}) =>{

    await page.goto("https://www.google.com/");

    await page.close();
});
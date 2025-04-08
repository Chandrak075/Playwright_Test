const {test , expect} = require("@playwright/test");
const allpom = require("../pages/allpom");
const JsonData = require("../pages/allpom.json");

test("All POM testing", async ({page})=> {

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    const allPom = new allpom(page);
    await allPom.logIntoApp(JsonData.username, JsonData.password);
    await allPom.validation();
    await allPom.logOut();
    await page.waitForTimeout(2000);
});
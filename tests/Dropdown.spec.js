const { test, expect } = require('@playwright/test');

test('Form data validation', async ({ page }) => {
   await page.goto("https://demo.automationtesting.in/Register.html");

   await page.locator("//input[@placeholder='First Name']").fill('Ck');
   await page.locator("//input[@placeholder='Last Name']").fill('the Legend');
   await page.locator("//textarea[@class='form-control ng-pristine ng-untouched ng-valid']").fill('Dil me');
   await page.locator("//input[@type='email']").fill('bhai@bhai.com');
   await page.locator("//input[@type='tel']").fill('0070070075');
   await page.locator("//input[@value='Male']").click();
   await page.locator("//input[@id='checkbox1']").click();

   // For the multi-select dropdown, we use selectOption with array of values
   await page.locator("#msdd").click();
   // Uncomment this line if you want to select "English" from the multi-select dropdown
   // await page.locator("//li/a[text()='English']").click();

   await page.locator("#Skills").selectOption({ label: "Android" });

   // Print all dropdown values
   const skillsDropdown = await page.locator("#Skills");
   const allOptions = await skillsDropdown.locator("option").allTextContents();
   console.log("All dropdown values are: ", allOptions);

   // Check if HTML is present then pass otherwise fail
   let ddStatus = false;
   if (allOptions.includes("HTML")) {
      ddStatus = true;
   }

   console.log("Dropdown status for 'HTML':", ddStatus);

   // Select DOB
   await page.locator("#yearbox").selectOption("2000");
   // await page.locator("#monthbox").selectText("April" );
   await page.locator("#daybox").selectOption("15");

   // Enter password and confirm password
   await page.locator("#firstpassword").fill("Password kya hoga naam hi kafi hai");
   await page.locator("#secondpassword").fill("Password kya hoga naam hi kafi hai");

   // Submit button
   await page.locator("#submitbtn").click();
   console.log("ho gaya bhai");

   await page.close();
});

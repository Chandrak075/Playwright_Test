const { test, expect } = require('@playwright/test');

// Test function to declare the test, expect is used to write assertions

// test.use({viewport: {width: 1287, height:561}});


test('Verify Login details', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);
    
    // Type the username and password with a delay
    await page.locator("input[name='username']").fill('Admin', { delay: 200 });
    await page.locator("input[name='password']").fill('admin123', { delay: 200 });

    // Click the submit button
    await page.locator("//button[@type='submit']").click();

    // Wait for the dashboard page to load
    await expect(page).toHaveURL(/dashboard/);

    // Interact with the profile picture to log out
    await page.locator('img[alt="profile picture"]').click();
    await page.locator('text=Logout').click();

    // Assert that the URL is as expected after logout
    await expect(page).toHaveURL(/login/);
});


test('Verify error Message', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Type the username and password with a delay
    await page.locator("input[name='username']").fill('Admin', { delay: 200 });
    await page.locator("input[name='password']").fill('admin1234', { delay: 200 });

    // Click the submit button
    await page.locator("//button[@type='submit']").click();

    // Get the error message
    const errorMessage = await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent();
    console.log("Message is: " + errorMessage);
    expect(errorMessage.includes("Invalid")).toBeTruthy();
expect(errorMessage ==  "Invalid credentials").toBeTruthy;
});

const { test, expect } = require('@playwright/test');

test('Handle new tab', async ({ browser }) => {
    // Create a new browser context
    const context = await browser.newContext();
    
    // Create a new page in the context
    const page = await context.newPage();
    
    // Navigate to the initial page
    await page.goto('https://example.com'); // Replace with your actual URL
    
    // Listen for the new page event
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for a new page (tab) to be created
        page.click('selector-for-link-to-open-new-tab') // Replace with the actual selector that opens the new tab
    ]);
    
    // Wait for the new page to load
    await newPage.waitForLoadState();

    // Perform actions in the new tab
    await newPage.goto('https://example-new-tab.com'); // Replace with the URL or actions you want to perform in the new tab
    
    // Verify something in the new tab
    await expect(newPage).toHaveURL('https://example-new-tab.com'); // Replace with the expected URL or other checks
    
    // Close the new tab
    await newPage.close();
    
    // Close the original page
    await page.close();
});

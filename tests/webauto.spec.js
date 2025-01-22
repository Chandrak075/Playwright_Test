const {test, expect} = require ('@playwright/test') 
//test function is to declair the test, expect is to wright assertions.
test ("Verify Gooogle Title", async function ({page}) {
    await page.goto('http://google.com')
    const url = await page.url() //capture page url
    console.log ("Title is :"+ url) //print the page url
    const title = await page.title() //capture the page title
    console.log ("Title is :"+ title)
   await expect (page).toHaveTitle ("Google") //it check the title.
    
})
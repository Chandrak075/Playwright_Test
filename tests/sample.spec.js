const {test, expect} = require ('@playwright/test') 
//test function is to declair the test, expect is to wright assertions.
test ("My First Test", async function ({page}) {
    expect(12).toBe(12)

})

test("My Second Test", async function ({page}) {
    expect(13).toBe(13)

}) // if you want to skip a test just wright test.skip // if you want to run a particular test write test.only

test ("My Third Test", async function ({page}) {
    expect('Chandrakanta beast').toContain('beast')
    
}) 
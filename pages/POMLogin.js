const { expect } = require("@playwright/test");

class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.username="#username";
        this.password="#password";
        this.submit="#submit";
    }

    async LogIntoApplication()
    {
        await this.page.fill(this.username,"student");
        await this.page.fill(this.password,"Password123");
        await this.page.click(this.submit);

        
    }
}

module.exports = LoginPage;
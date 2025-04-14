const { expect , test } = require("@playwright/test");
const exp = require("constants");


class HomePage{
    constructor(page) {
        this.page = page
        this.userName = "#username"
        this.password = "#password"
        this.button="#submit"
        this.title="//h1"
        this.align = ".has-text-align-center"
        this.logout="//a[text()='Log out']"
    }

    async logIntoApp(user , pass){
        await this.page.fill(this.userName, user)
        await this.page.fill(this.password, pass)
        await this.page.click(this.button)
    }

    async validation(){
        await expect(this.page.locator(this.title)).toHaveText("Logged In Successfully")
        await expect(this.page.locator(this.align)).toHaveText("Congratulations student. You successfully logged in!")
    }

    async logOut(){
        await this.page.click(this.logout)
    }
}
module.exports = HomePage
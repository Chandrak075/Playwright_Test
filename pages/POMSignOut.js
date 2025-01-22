const { expect, test } = require("@playwright/test");

class SignOut {
    constructor(page) {
        this.page = page;
        this.btn = ".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color"; // Corrected CSS selector
    }

    async LogOutApplication() {
        await this.page.click(this.btn);
    }
}

module.exports = SignOut;

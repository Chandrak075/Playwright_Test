class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('#username'); // Username field
      this.passwordInput = page.locator('#password'); // Password field
      this.submitButton = page.locator('#submit'); // Login button
    }
  
    async loginApp(username = 'student', password = 'Password123') {
      // Fill the username and password
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
  
      // Click the login button
      await this.submitButton.click();
    }
  }
  
  module.exports = LoginPage;
  
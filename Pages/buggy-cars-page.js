// Pages/buggy-cars-page.js

export class BuggyCarsPage {
    constructor(page) {
        this.page = page;
        
        // Login locators (top right header)
        this.loginUsernameField = page.locator('input[name="login"]');
        this.loginPasswordField = page.locator('input[name="password"]');
        this.loginButton = page.locator('button.btn.btn-success');
        this.registerLink = page.locator('a[href="/register"]');
        
        // Registration form locators
        this.regLoginField = page.locator('input#username');
        this.regFirstNameField = page.locator('input#firstName');
        this.regLastNameField = page.locator('input#lastName');
        this.regPasswordField = page.locator('input#password');
        this.regConfirmPasswordField = page.locator('input#confirmPassword');
        this.registerButton = page.locator('button.btn.btn-default');
        this.cancelLink = page.locator('a.btn.btn-link');
        
        // Success/Error messages
        this.successMessage = page.locator('div.result.alert-success');
        this.errorMessage = page.locator('div.result.alert-danger');
        this.fieldValidationError = page.locator('.help-block');
        
        // Post-login elements
        this.logoutLink = page.locator('a[href="/logout"]');
        this.userGreeting = page.locator('.nav.navbar-nav.navbar-right li');
        
        // Alternative logout locator
        this.logoutLinkAlt = page.getByRole('link', { name: 'Logout' });
    }

    // Navigation methods
    async navigateToHomePage() {
        await this.page.goto('https://buggy.justtestit.org/');
    }

    async clickRegisterLink() {
        await this.registerLink.click();
    }

    // Login methods (from top navigation)
    async fillLoginUsername(username) {
        await this.loginUsernameField.fill(username);
    }

    async fillLoginPassword(password) {
        await this.loginPasswordField.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.fillLoginUsername(username);
        await this.fillLoginPassword(password);
        await this.clickLoginButton();
    }

    // Registration form methods
    async fillRegLogin(login) {
        await this.regLoginField.fill(login);
    }

    async fillRegFirstName(firstName) {
        await this.regFirstNameField.fill(firstName);
    }

    async fillRegLastName(lastName) {
        await this.regLastNameField.fill(lastName);
    }

    async fillRegPassword(password) {
        await this.regPasswordField.fill(password);
    }

    async fillRegConfirmPassword(confirmPassword) {
        await this.regConfirmPasswordField.fill(confirmPassword);
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async clickCancelLink() {
        await this.cancelLink.click();
    }

    async register(login, firstName, lastName, password, confirmPassword) {
        await this.fillRegLogin(login);
        await this.fillRegFirstName(firstName);
        await this.fillRegLastName(lastName);
        await this.fillRegPassword(password);
        await this.fillRegConfirmPassword(confirmPassword);
        await this.clickRegisterButton();
    }

    // Visibility check methods - Login page
    async isLoginUsernameFieldVisible() {
        return await this.loginUsernameField.isVisible();
    }

    async isLoginPasswordFieldVisible() {
        return await this.loginPasswordField.isVisible();
    }

    async isLoginButtonVisible() {
        return await this.loginButton.isVisible();
    }

    async isRegisterLinkVisible() {
        return await this.registerLink.isVisible();
    }

    // Visibility check methods - Registration page
    async isRegLoginFieldVisible() {
        return await this.regLoginField.isVisible();
    }

    async isRegFirstNameFieldVisible() {
        return await this.regFirstNameField.isVisible();
    }

    async isRegLastNameFieldVisible() {
        return await this.regLastNameField.isVisible();
    }

    async isRegPasswordFieldVisible() {
        return await this.regPasswordField.isVisible();
    }

    async isRegConfirmPasswordFieldVisible() {
        return await this.regConfirmPasswordField.isVisible();
    }

    async isRegisterButtonVisible() {
        return await this.registerButton.isVisible();
    }

    async isCancelLinkVisible() {
        return await this.cancelLink.isVisible();
    }

    async isLogoutLinkVisible() {
        try {
            // Try primary locator first
            const visible = await this.logoutLink.isVisible({ timeout: 3000 });
            if (visible) return true;
            
            // Try alternative locator
            return await this.logoutLinkAlt.isVisible({ timeout: 2000 });
        } catch {
            return false;
        }
    }

    // Message methods
    async isSuccessMessageVisible() {
        try {
            return await this.successMessage.isVisible({ timeout: 5000 });
        } catch {
            return false;
        }
    }

    async isErrorMessageVisible() {
        try {
            return await this.errorMessage.isVisible({ timeout: 5000 });
        } catch {
            return false;
        }
    }

    async getSuccessMessageText() {
        return await this.successMessage.textContent();
    }

    async getErrorMessageText() {
        return await this.errorMessage.textContent();
    }

    async getFieldValidationErrorText() {
        return await this.fieldValidationError.textContent();
    }

    async isFieldValidationErrorVisible() {
        try {
            return await this.fieldValidationError.isVisible({ timeout: 3000 });
        } catch {
            return false;
        }
    }

    // Logout method
    async logout() {
        await this.logoutLink.click();
    }
}
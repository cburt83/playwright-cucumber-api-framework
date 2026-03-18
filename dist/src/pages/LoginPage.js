"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const BasePage_1 = require("./BasePage");
const test_1 = require("@playwright/test");
class LoginPage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.username = this.page.locator('#user-name');
        this.password = this.page.locator('#password');
        this.loginBtn = this.page.locator('#login-button');
        this.errorMessage = this.page.locator('.error-button');
    }
    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }
    async assertErrorMessageVisible(expectedMessage) {
        await (0, test_1.expect)(this.errorMessage).toBeVisible();
        await (0, test_1.expect)(this.errorMessage).toHaveText(expectedMessage);
    }
}
exports.LoginPage = LoginPage;

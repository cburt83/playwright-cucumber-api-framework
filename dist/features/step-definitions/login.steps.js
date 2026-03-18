"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const LoginPage_1 = require("../../src/pages/LoginPage");
(0, cucumber_1.Given)('I am on the login page', async function () {
    this.loginPage = new LoginPage_1.LoginPage(this.page);
    await this.loginPage.navigate('https://www.saucedemo.com/');
});
(0, cucumber_1.When)('I login with valid credentials', async function () {
    await this.loginPage.login('standard_user', 'secret_sauce');
});
(0, cucumber_1.Then)('I should be redirected to the products page', async function () {
    await this.loginPage.assertUrlContains('inventory.html');
});
(0, cucumber_1.When)('I login with invalid credentials', async function () {
    await this.loginPage.login('invalid_user', 'invalid_password');
});
(0, cucumber_1.Then)('I should see the error message {string}', async function (message) {
    await this.loginPage.assertErrorMessageVisible(message);
});

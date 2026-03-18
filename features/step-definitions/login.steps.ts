import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../src/support/world';
import { LoginPage } from '../../src/pages/LoginPage';

Given('I am on the login page', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate('https://www.saucedemo.com/');
});

When('I login with valid credentials', async function (this: CustomWorld) {
  await this.loginPage.login('standard_user', 'secret_sauce');
});

Then('I should be redirected to the products page', async function (this: CustomWorld) {
  await this.loginPage.assertUrlContains('inventory.html');
});


When('I login with invalid credentials', async function (this: CustomWorld) {
  await this.loginPage.login('invalid_user', 'invalid_password');
});


Then('I should see the error message {string}', async function (this: CustomWorld, message: string) {
  await this.loginPage.assertErrorMessageVisible(message);
});

Given('I am logged in with valid credentials', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate('https://www.saucedemo.com/');
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.loginPage.assertUrlContains('inventory.html');
});

import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';
import { Assert } from '../utils/assertions';


export class LoginPage extends BasePage {
  
  username = this.page.locator('#user-name');
  password = this.page.locator('#password');
  loginBtn = this.page.locator('#login-button');
  errorMessage = this.page.locator('[data-test="error"]')
 // INVALID  errorMessage = this.page.locator('.error-button')
   
  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async assertErrorMessageVisible(expectedMessage: string) {
  await Assert.textVisible(this.errorMessage, expectedMessage, 'Login Error Message');
}

}

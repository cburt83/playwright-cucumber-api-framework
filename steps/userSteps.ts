import { When, Then } from '@cucumber/cucumber';
import { UserApi } from '../apis/userApi';
import { expect } from '@playwright/test';

When('I get user {int}', async function (id: number) {
  const api = new UserApi(this.userApi);
  this.response = await api.getUser(id);
  this.json = await this.response.json();
});

When('I list users on page {int}', async function (page: number) {
  const limit = 10;
  const skip = (page - 1) * limit;

  const api = new UserApi(this.userApi);
  this.response = await api.listUsers(limit, skip);
  this.json = await this.response.json();
});

Then('the response status should be {int}', async function (statusCode) {
  expect(this.response.status()).toBe(statusCode);
});

Then('the response JSON should contain {string}', async function (key) {
  expect(this.json).toHaveProperty(key);
});

Then('the response JSON should contain {string} with value {string}', function (field, value) {
  expect(String(this.json[field])).toBe(value);
});

import { Given } from '@cucumber/cucumber';
import { AuthApi } from '../apis/authApi';

async function authenticate(this: any, username: string, password: string) {
  const api = new AuthApi(this.authApi);
  this.response = await api.login(username, password);
  const body = await this.response.json();
  this.json = body;
  this.token = body?.accessToken ?? null;
}

Given('I authenticate with valid credentials', async function () {
  await authenticate.call(this, 'emilys', 'emilyspass');
});

Given('I authenticate with username {string} and password {string}', async function (username: string, password: string) {
  await authenticate.call(this, username, password);
});

Given('I authenticate without credentials', async function () {
  await authenticate.call(this, '', '');
});
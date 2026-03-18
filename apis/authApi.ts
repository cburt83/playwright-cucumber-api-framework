import { APIRequestContext } from '@playwright/test';

export class AuthApi {
  constructor(private api: APIRequestContext) {}

  async login(username: string, password: string) {
    console.log('🔐 AUTH REQUEST');
    console.log('POST /auth/login');
    console.log('Payload:', { username, password });

    const response = await this.api.post('/auth/login', {
      headers: { 'Content-Type': 'application/json' },
      data: { username, password }
    });

    console.log('🔐 AUTH RESPONSE STATUS:', response.status());

    const body = await response.json();
    console.log('🔐 AUTH RESPONSE BODY:', body);

    return response;
  }
}

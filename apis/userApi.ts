import { APIRequestContext } from '@playwright/test';

export class UserApi {
  constructor(private api: APIRequestContext) {}

  async getUser(id: number) {
    console.log(`👤 USER REQUEST: GET /users/${id}`);

    const response = await this.api.get(`/users/${id}`);

    console.log('👤 USER RESPONSE STATUS:', response.status());
    const body = await response.json();
    console.log('👤 USER RESPONSE BODY:', body);

    return response;
  }

  async listUsers(limit: number, skip: number) {
    console.log(`👥 USER LIST REQUEST: GET /users?limit=${limit}&skip=${skip}`);

    const response = await this.api.get('/users', {
      params: { limit, skip }
    });

    console.log('👥 USER LIST RESPONSE STATUS:', response.status());
    const body = await response.json();
    console.log('👥 USER LIST RESPONSE BODY:', body);

    return response;
  }

  async searchUsers(query: string) {
    console.log(`🔎 USER SEARCH REQUEST: GET /users/search?q=${query}`);

    const response = await this.api.get('/users/search', {
      params: { q: query }
    });

    console.log('🔎 USER SEARCH RESPONSE STATUS:', response.status());
    const body = await response.json();
    console.log('🔎 USER SEARCH RESPONSE BODY:', body);

    return response;
  }
}

import { APIRequestContext } from '@playwright/test';

export class OrderApi {
  constructor(private api: APIRequestContext) {}

  async getOrder(id: number) {
    console.log('📦 ORDER REQUEST: GET /carts/' + id);

    const response = await this.api.get(`/carts/${id}`);

    console.log('📦 ORDER RESPONSE STATUS:', response.status());
    const body = await response.json();
    console.log('📦 ORDER RESPONSE BODY:', body);

    return response;
  }

  async listOrders() {
    console.log('📦 ORDER REQUEST: GET /carts');

    const response = await this.api.get('/carts');

    console.log('📦 ORDER RESPONSE STATUS:', response.status());
    const body = await response.json();
    console.log('📦 ORDER RESPONSE BODY:', body);

    return response;
  }

  async getOrdersForUser(userId: number) {
    console.log(`📦 ORDER REQUEST: GET /carts/user/${userId}`);

    const response = await this.api.get(`/carts/user/${userId}`);

    console.log('📦 ORDER RESPONSE STATUS:', response.status());
    const body = await response.json();
    console.log('📦 ORDER RESPONSE BODY:', body);

    return response;
  }

  async placeOrder(productId: number, quantity: number) {
    console.log('🛒 ORDER CREATE REQUEST');
    console.log('POST /carts/add');
    console.log('Payload:', {
      userId: 1,
      products: [{ id: productId, quantity }]
    });

    const response = await this.api.post('/carts/add', {
      headers: { 'Content-Type': 'application/json' },
      data: {
        userId: 1,
        products: [{ id: productId, quantity }]
      }
    });

    console.log('🛒 ORDER CREATE RESPONSE STATUS:', response.status());
    const body = await response.json();
    console.log('🛒 ORDER CREATE RESPONSE BODY:', body);

    return response;
  }
}

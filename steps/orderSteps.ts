import { When, Then } from '@cucumber/cucumber';
import { OrderApi } from '../apis/orderApi';
import { expect } from '@playwright/test';

When('I get order {int}', async function (id: number) {
  const api = new OrderApi(this.orderApi);
  this.response = await api.getOrder(id);
  this.json = await this.response.json();
});

Then('the order response should contain {string}', function (key: string) {
  expect(this.json).toHaveProperty(key);
});


When(
  'I place an order for product {string} with quantity {int}',
  async function (productId: string, quantity: number) {
    const api = new OrderApi(this.orderApi);

    this.response = await api.placeOrder(Number(productId), quantity);
    this.json = await this.response.json();
  }
);

Then('the order ID should be returned', function () {
  expect(this.json).toHaveProperty('id');
});

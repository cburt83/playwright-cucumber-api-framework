import { setWorldConstructor, World } from '@cucumber/cucumber';
import { request, APIRequestContext } from '@playwright/test';
import { config } from './config';

// CustomWorld provides scenario‑scoped state for Cucumber tests.
// A new instance is created for every scenario, ensuring isolation.

export class CustomWorld extends World {
  authApi!: APIRequestContext;
  userApi!: APIRequestContext;
  orderApi!: APIRequestContext;

  response: any;
  json: any;
  token: string | null = null;

/**
 * Initialises a fresh test World for each Cucumber scenario.
 *
 * Cucumber creates a new World instance before every scenario, and this method
 * prepares that instance by creating clean Playwright APIRequestContexts for
 * authentication, user, and order operations. Each context starts with no
 * cookies, headers, tokens, or cached state, ensuring scenarios remain fully
 * isolated and reproducible.
 *
 * Because a new World is created every time, no state (token, response, JSON,
 * order IDs, etc.) carries over between scenarios. Any scenario that requires
 * authentication must explicitly perform it, and public endpoints can run
 * without it. This design keeps tests predictable, parallel‑safe, and free
 * from cross‑scenario contamination.
 */

  async init() {
    this.authApi = await request.newContext({ baseURL: config.baseURL });
    this.userApi = await request.newContext({ baseURL: config.baseURL });
    this.orderApi = await request.newContext({ baseURL: config.baseURL });
  }
}

console.log('Using baseURL:', config.baseURL);

setWorldConstructor(CustomWorld);

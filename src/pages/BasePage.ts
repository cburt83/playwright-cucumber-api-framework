import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async assertUrlContains(text: string) {
    await expect(this.page).toHaveURL(new RegExp(text));
  }
}

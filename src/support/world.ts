import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';


export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  ProductsPage!: ProductsPage;

}

setWorldConstructor(CustomWorld);

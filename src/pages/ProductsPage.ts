import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';
import { Assert } from '../utils/assertions';

export class ProductsPage extends BasePage {

    FirstProduct = this.page.locator('#add-to-cart-sauce-labs-backpack');
    ShoppingCartBadge = this.page.locator('[data-test="shopping-cart-badge"]');
    async addFirstProductToCart() {
        await this.FirstProduct.click();
    }

       async ProductInBasket(string: any) {
        await Assert.textVisible(this.ShoppingCartBadge, string, '1');

    }
   
}

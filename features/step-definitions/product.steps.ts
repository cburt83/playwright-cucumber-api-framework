import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../src/support/world';
import { LoginPage } from '../../src/pages/LoginPage';
import { ProductsPage } from '../../src/pages/ProductsPage';

When('I add the first product to the cart', async function (this: CustomWorld) {
    this.ProductsPage = new ProductsPage(this.page);
    await this.ProductsPage.addFirstProductToCart();
});

Then('the cart badge should show {string}', async function (this: CustomWorld, string) {
    await this.ProductsPage.ProductInBasket(string);
});


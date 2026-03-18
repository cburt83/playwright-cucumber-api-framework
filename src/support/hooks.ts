import { Before, After, Status } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';



Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
  headless: process.env.CI ? true : false
  });


  this.context = await this.browser.newContext({
    recordVideo: { dir: 'videos/' }
  });

  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      path: `./reports/screenshots/${scenario.pickle.name}.png`,
      fullPage: true
    });
    this.attach(screenshot, 'image/png');
  }
});

After(async function (this: CustomWorld) {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});

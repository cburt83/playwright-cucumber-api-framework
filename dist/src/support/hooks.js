"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
(0, cucumber_1.Before)(async function () {
    this.browser = await test_1.chromium.launch({ headless: false });
    this.context = await this.browser.newContext({
        recordVideo: { dir: 'videos/' }
    });
    this.page = await this.context.newPage();
});
(0, cucumber_1.After)(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});

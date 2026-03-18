"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomWorld = void 0;
const cucumber_1 = require("@cucumber/cucumber");
class CustomWorld extends cucumber_1.World {
}
exports.CustomWorld = CustomWorld;
(0, cucumber_1.setWorldConstructor)(CustomWorld);

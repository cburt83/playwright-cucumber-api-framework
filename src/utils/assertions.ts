import { expect, Locator } from '@playwright/test';

export class Assert {
  static toHaveText: any;
  static async textVisible(locator: Locator, expected: string, selectorName: string) {
    let actual: string | null = null;

    try {
      actual = await locator.textContent();
    } catch {
      actual = null;
    }

    try {
      await expect(locator).toBeVisible({ timeout: 3000 });
      await expect(locator).toHaveText(expected, { timeout: 3000 });
    } catch (err) {
      throw new Error(
        `❌ Assertion failed for: ${selectorName}
Expected text: "${expected}"
Actual text:   "${actual}"
Selector:      ${locator.toString()}
Reason:        ${err}`
      );
    }
  }
}

const { test, expect } = require('@playwright/test');

test('Browser context playwright test', async ({ browser }) => {
  // when you want to give more context to the browser, you can use browser context. It is like incognito mode in the browser. It will not share cookies and cache with other contexts.
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title());
  await expect(page).toHaveTitle(/Login/);
});

test.only('Page context playwright test', async ({ page }) => {
  await page.goto('https://google.com/');
  console.log(await page.title());
  await expect(page).toHaveTitle('Google');
});
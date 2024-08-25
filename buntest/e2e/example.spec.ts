import { test, expect, TestInfo, Page } from '@playwright/test';

// test('has name', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('show submit button',async ({page}) => {

    await page.goto('http://localhost:5173/');
    await page.locator('#validateOnly_name').pressSequentially('Peter'); // .focus(); //
    // await page.keyboard.press('P');
    await page.locator('#validateOnly_age').pressSequentially('37'); //.focus(); //
    // await page.keyboard.press('2');
    // await page.keyboard.press('5');
    await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
    
    
    
    // await page.keyboard.press('Tab');
    // await page.locator('#validateOnly_select').click();
    // await page.getByTitle('🇺🇸 - USA').click();
})

// test.afterEach('show submit button', async ({page}) => {
//     if (test.info().status == test.info().expectedStatus) {
//         await page.screenshot({path: 'show_submit_button.png', fullPage: true, timeout: 5000});

        // Get a unique place for the screenshot.
        // const screenshotPath = test.info().outputPath('failure.png');
        // Add it to the report.
        // test.info().attachments.push({ name: 'screenshot', path: 'wiki.png', contentType: 'image/png' });
        // Take the screenshot itself.
        // await page.screenshot({path: 'wiki.png', fullPage: true, timeout: 5000});
    // }
// });

test('hide submit button-1',async ({page}) => {

    await page.goto('http://localhost:5173/');
    await page.locator('#validateOnly_name').pressSequentially('Peter');
    await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
})

test('hide submit button-2',async ({page}) => {

    await page.goto('http://localhost:5173/');
    await page.locator('#validateOnly_age').pressSequentially('37');
    await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
})
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/index.html');

  // Initial check
  let themeColor = await page.$eval('#theme-meta', el => el.getAttribute('content'));
  console.log('Initial theme-color:', themeColor);

  // Click Emerald Green theme
  // Verde Smeraldo is the second option
  await page.click('text=Verde Smeraldo');

  themeColor = await page.$eval('#theme-meta', el => el.getAttribute('content'));
  console.log('Updated theme-color (Emerald):', themeColor);

  await browser.close();
})();

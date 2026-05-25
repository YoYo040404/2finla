// QA screenshot script — Pass 9C visual verification
// Run: node qa-screenshots.mjs
// Takes full-page screenshots at 390px (mobile) and 1280px (desktop)
// for /, /custom, /grillz, /watches

import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:3000';
const PAGES = ['/', '/custom', '/grillz', '/watches'];
const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 900 },
];
const OUT = './qa-screenshots';

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const vp of VIEWPORTS) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  for (const route of PAGES) {
    const slug = route === '/' ? 'home' : route.replace('/', '');
    const filename = `${OUT}/${vp.name}-${slug}.png`;

    console.log(`Capturing ${vp.name} ${route} → ${filename}`);
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle', timeout: 15000 });

    // Wait for fonts and animations to settle
    await page.waitForTimeout(1200);

    // Check for horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const hasHScroll = scrollWidth > clientWidth;
    console.log(`  scroll: scrollWidth=${scrollWidth} clientWidth=${clientWidth} hScroll=${hasHScroll}`);

    // Check for key elements
    const h1Text = await page.evaluate(() => document.querySelector('h1')?.textContent?.trim() ?? 'MISSING');
    console.log(`  h1: "${h1Text}"`);

    // Full-page screenshot
    await page.screenshot({ path: filename, fullPage: true });
    console.log(`  ✅ saved`);
  }

  await context.close();
}

await browser.close();
console.log('\nAll screenshots saved to ./qa-screenshots/');

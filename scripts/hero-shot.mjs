import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE ?? "http://localhost:3000";
const OUT = process.env.OUT ?? "/tmp/hero";
mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: "desktop-1440", width: 1440, height: 940 },
  { name: "laptop-1024", width: 1024, height: 820 },
  { name: "tablet-834", width: 834, height: 1000 },
  { name: "mobile-390", width: 390, height: 880 },
  { name: "mobile-320", width: 320, height: 820 },
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/${vp.name}.png` });
  await context.close();
  console.log(`captured ${vp.name}`);
}

await browser.close();

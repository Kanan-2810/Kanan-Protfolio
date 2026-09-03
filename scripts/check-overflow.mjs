import { chromium } from "playwright";

const BASE = process.env.BASE ?? "http://localhost:3000";
const widths = [320, 360, 390, 430, 640, 768, 834, 1024, 1280, 1440, 1920];

const browser = await chromium.launch();
let failures = 0;

for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  const result = await page.evaluate(() => {
    const doc = document.documentElement;
    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;
      const overflow = Math.round(rect.right - doc.clientWidth);
      if (overflow > 1) {
        const style = getComputedStyle(el);
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || "").toString().slice(0, 90),
          right: Math.round(rect.right),
          overflow,
          clipped: style.overflow !== "visible" || style.overflowX !== "visible",
        });
      }
    }
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
      offenders: offenders.slice(0, 8),
    };
  });

  const scrolls = result.scrollWidth > result.clientWidth + 1;
  const flag = scrolls ? "OVERFLOW" : "ok";
  if (scrolls) failures += 1;
  console.log(
    `${String(width).padStart(5)}px  ${flag.padEnd(9)} scrollWidth=${result.scrollWidth} clientWidth=${result.clientWidth} body=${result.bodyScrollWidth}`,
  );
  if (scrolls) {
    for (const o of result.offenders) {
      console.log(`         +${o.overflow}px  <${o.tag}> ${o.cls}`);
    }
  }
  await context.close();
}

await browser.close();
console.log(failures ? `\n${failures} width(s) overflow horizontally` : "\nno horizontal overflow");

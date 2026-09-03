import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const BASE = process.env.BASE ?? "http://localhost:3000";
const PAGES = ["/", "/work/northwind-clinical-suite"];

const browser = await chromium.launch();
let problems = 0;

for (const path of PAGES) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 940 } });
  const page = await context.newPage();

  const consoleErrors = [];
  const failedRequests = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("requestfailed", (req) => failedRequests.push(req.url()));
  page.on("response", (res) => {
    if (res.status() >= 400) failedRequests.push(`${res.status()} ${res.url()}`);
  });

  await page.goto(BASE + path, { waitUntil: "networkidle" });

  // Reveal everything so lazy content is measurable.
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = "auto";
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(600);

  console.log(`\n=== ${path} ===`);

  const images = await page.evaluate(() =>
    [...document.images].map((img) => ({
      src: img.currentSrc || img.src,
      loaded: img.complete && img.naturalWidth > 0,
      alt: img.getAttribute("alt"),
      w: img.naturalWidth,
      h: img.naturalHeight,
    })),
  );
  const broken = images.filter((i) => !i.loaded);
  const missingAlt = images.filter((i) => i.alt === null);
  console.log(`images: ${images.length} total, ${broken.length} broken, ${missingAlt.length} missing alt`);
  broken.forEach((i) => console.log(`  BROKEN ${i.src}`));
  missingAlt.forEach((i) => console.log(`  NO ALT ${i.src}`));
  problems += broken.length + missingAlt.length;

  const dupes = await page.evaluate(() => {
    const seen = new Map();
    for (const el of document.querySelectorAll("[id]")) {
      seen.set(el.id, (seen.get(el.id) ?? 0) + 1);
    }
    return [...seen].filter(([, n]) => n > 1).map(([id, n]) => `${id} x${n}`);
  });
  console.log(`duplicate ids: ${dupes.length ? dupes.join(", ") : "none"}`);
  problems += dupes.length;

  const h1s = await page.locator("h1").count();
  console.log(`h1 count: ${h1s}`);
  if (h1s !== 1) problems += 1;

  const { violations } = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  console.log(`axe violations: ${violations.length}`);
  for (const v of violations) {
    console.log(`  [${v.impact}] ${v.id}: ${v.help}`);
    v.nodes.slice(0, 4).forEach((n) => console.log(`      ${n.target.join(" ")}`));
  }
  problems += violations.length;

  const realFailures = failedRequests.filter((u) => !u.includes("__nextjs"));
  console.log(`console errors: ${consoleErrors.length}, failed requests: ${realFailures.length}`);
  consoleErrors.slice(0, 5).forEach((e) => console.log(`  ERR ${e}`));
  realFailures.slice(0, 5).forEach((e) => console.log(`  REQ ${e}`));
  problems += consoleErrors.length + realFailures.length;

  await context.close();
}

await browser.close();
console.log(problems === 0 ? "\nALL CHECKS PASSED" : `\n${problems} problem(s) found`);
process.exit(problems === 0 ? 0 : 1);

import { chromium } from "playwright";

const BASE = process.env.BASE ?? "http://localhost:3000";
const browser = await chromium.launch();
let problems = 0;

const fail = (msg) => {
  console.log(`  FAIL ${msg}`);
  problems += 1;
};
const pass = (msg) => console.log(`  ok   ${msg}`);

/* ---------------------------------------------------------------- desktop */
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 940 } });
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: "html{scroll-behavior:auto !important}" });

  console.log("desktop 1440");

  // Both hero stat cards render on desktop.
  for (const value of ["5+", "20+"]) {
    const card = page.locator("#home").getByText(value, { exact: true });
    (await card.isVisible())
      ? pass(`hero stat card "${value}" visible`)
      : fail(`hero stat card "${value}" hidden`);
  }

  // Nav link actually scrolls to its section.
  await page.locator("header").getByRole("link", { name: "Work", exact: true }).click();
  await page.waitForTimeout(700);
  const atWork = await page.evaluate(() => {
    const el = document.getElementById("work");
    return el ? Math.abs(el.getBoundingClientRect().top) < 200 : false;
  });
  atWork ? pass("nav scrolls to #work") : fail("nav did not reach #work");

  // Every nav link resolves to a section that exists.
  await page.evaluate(() => window.scrollTo(0, 0));
  const navTargets = await page.$$eval("header a[href^='#']", (as) =>
    as.map((a) => a.getAttribute("href")),
  );
  const missing = await page.evaluate(
    (hrefs) => hrefs.filter((h) => h !== "#" && !document.querySelector(h)),
    navTargets,
  );
  missing.length === 0
    ? pass(`${navTargets.length} nav anchors all resolve`)
    : fail(`nav anchors missing: ${missing.join(", ")}`);

  // FAQ accordion.
  const q = page.getByRole("button", { name: /What kind of projects/ });
  await q.scrollIntoViewIfNeeded();
  await q.click();
  await page.waitForTimeout(450);
  (await q.getAttribute("aria-expanded")) === "true"
    ? pass("FAQ opens")
    : fail("FAQ did not open");
  await q.click();
  await page.waitForTimeout(450);
  (await q.getAttribute("aria-expanded")) === "false"
    ? pass("FAQ closes")
    : fail("FAQ did not close");

  // Testimonial carousel.
  const next = page.getByRole("button", { name: /next testimonial/i });
  await next.scrollIntoViewIfNeeded();
  const before = await page.locator("blockquote").first().innerText();
  await next.click();
  await page.waitForTimeout(600);
  const after = await page.locator("blockquote").first().innerText();
  before !== after ? pass("carousel advances") : fail("carousel did not advance");

  await page.evaluate(() => window.scrollTo(0, 0));
  const focusable = await page.evaluate(() => {
    const sel = "a[href], button:not([disabled])";
    return document.querySelectorAll(sel).length;
  });
  focusable > 20 ? pass(`${focusable} focusable controls`) : fail("too few focusable controls");

  await context.close();
}

/* ----------------------------------------------------------------- mobile */
{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: "html{scroll-behavior:auto !important}" });

  console.log("mobile 390");

  // Scope to the primary navigation — the footer repeats the same labels.
  const nav = page.getByRole("navigation", { name: /primary/i });
  const toggle = page.getByRole("button", { name: /menu/i }).first();
  await toggle.click();
  await page.waitForTimeout(400);

  const navServices = nav.getByRole("link", { name: "Services", exact: true });
  (await navServices.isVisible())
    ? pass("mobile menu opens")
    : fail("mobile menu did not open");

  await navServices.click();
  await page.waitForTimeout(700);

  const stillOpen = await navServices.isVisible().catch(() => false);
  const atServices = await page.evaluate(() => {
    const el = document.getElementById("services");
    return el ? el.getBoundingClientRect().top < 400 : false;
  });
  atServices ? pass("mobile menu navigates to #services") : fail("did not reach #services");
  stillOpen ? fail("mobile menu stayed open") : pass("mobile menu closes after navigating");

  await context.close();
}

await browser.close();
console.log(problems === 0 ? "\nINTERACTIONS PASSED" : `\n${problems} interaction problem(s)`);
process.exit(problems === 0 ? 0 : 1);

/* Run with PLAYWRIGHT_MODULE pointing to an installed Playwright package.
 * Serve the parent of the book checkouts on localhost:4198 first.
 */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.env.READER_BASE || 'http://127.0.0.1:4198/';
const snapshots = 'build/ebook-readers/';
const books = [
  ['Apache', snapshots + 'opensource-book-site/index.html'],
  ['Java', snapshots + 'opensource-book-site/java-concurrency/index.html'],
  ['JVM', snapshots + 'jvm-bug-book-reader/public/index.html'],
  ['Redis', snapshots + 'redis-book/docs/index.html'],
  ['Gateway', snapshots + 'api-gateway-book-reader/site/index.html'],
  ['Sandbox', snapshots + 'agent-sandbox-book-online/chapter-08.html'],
  ['Memory', snapshots + 'agent-memory-book/docs/architecture.html'],
  ['Agent', snapshots + 'agent-book/docs/site/03-agent-loop.html'],
  ['Codex', 'codex-engineering-book/_site/index.html'],
  ['Pi', 'pi-beginner-book-zh/site/chapters/05-prompt-to-tool.html'],
  ['Harness', 'deepseek-harness-book/docs/index.html'],
  ['Envoy', snapshots + 'envoy-learning-book/site/01-foundations/01-one-request/index.html'],
];
const content = 'main, article, .prose, .book-content, #book, .md-typeset, .aias-basic-reader';
async function settle(page) {
  await page.waitForFunction(() => document.querySelector('.aias-reader-theme, [data-md-component="palette"]'));
}
async function measurements(page) {
  return page.evaluate(selector => {
    const css = getComputedStyle(document.body);
    const target = document.querySelector(selector);
    const rgb = color => color.trim().startsWith('#') ? color.trim().slice(1).match(/../g).map(v => parseInt(v, 16)) : (color.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
    const luminance = color => rgb(color).map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((a, v, i) => a + v * [.2126, .7152, .0722][i], 0);
    const contrast = (a, b) => { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
    const spans = [...document.querySelectorAll('pre code span')].filter(e => e.textContent.trim());
    let codeContrast = Infinity;
    for (const span of spans) {
      const pre = span.closest('pre');
      codeContrast = Math.min(codeContrast, contrast(getComputedStyle(span).color, getComputedStyle(pre).backgroundColor));
    }
    return {
      background: css.backgroundColor,
      textContrast: contrast(css.color, css.backgroundColor),
      mutedContrast: contrast(css.getPropertyValue('--reader-muted'), css.getPropertyValue('--reader-page')),
      codeContrast: Number.isFinite(codeContrast) ? codeContrast : null,
      fontSize: target ? getComputedStyle(target).fontSize : null,
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      theme: document.documentElement.dataset.theme || document.body.dataset.mdColorScheme,
    };
  }, content);
}
async function toggle(page) {
  const control = page.locator('.aias-reader-theme');
  if (await control.count()) {
    if (await control.evaluate(e => e.tagName === 'SELECT')) await control.selectOption('dark');
    else await control.click();
  } else {
    await page.locator('[data-md-component="palette"] label[for="__palette_1"]').click();
  }
}
(async () => {
  const browser = await chromium.launch({ headless: true });
  const shots = process.env.READER_SCREENSHOTS;
  if (shots) fs.mkdirSync(shots, { recursive: true });
  try {
    for (const [name, path] of books) {
      const context = await browser.newContext({ colorScheme: 'dark', viewport: { width: 1280, height: 900 } });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      const response = await page.goto(new URL(path, base).href);
      assert.equal(response.status(), 200, name + ' entry');
      await settle(page);
      const light = await measurements(page);
      assert.equal(light.background, 'rgb(247, 247, 243)', name + ' defaults to light under dark OS');
      assert(light.textContrast >= 7, name + ' body contrast');
      assert(light.mutedContrast >= 4.5, name + ' muted contrast');
      assert(!light.overflow, name + ' desktop overflow');
      if (light.codeContrast !== null) assert(light.codeContrast >= 4.5, name + ' light syntax contrast: ' + light.codeContrast);
      if (shots && ['Codex', 'Memory', 'Agent'].includes(name)) await page.screenshot({ path: `${shots}/${name}-light.png` });
      await toggle(page);
      const dark = await measurements(page);
      assert.equal(dark.background, 'rgb(28, 31, 36)', name + ' dark background');
      assert(dark.textContrast >= 7, name + ' dark body contrast');
      assert(dark.mutedContrast >= 4.5, name + ' dark muted contrast');
      if (dark.codeContrast !== null) assert(dark.codeContrast >= 4.5, name + ' dark syntax contrast: ' + dark.codeContrast);
      await page.reload();
      await settle(page);
      assert.equal((await measurements(page)).background, 'rgb(28, 31, 36)', name + ' persists theme');
      await page.setViewportSize({ width: 390, height: 844 });
      assert(!(await measurements(page)).overflow, name + ' mobile overflow');
      if (shots && ['Codex', 'Memory', 'Agent'].includes(name)) await page.screenshot({ path: `${shots}/${name}-dark-mobile.png` });
      assert.deepEqual(errors, [], name + ' JavaScript errors');
      console.log('PASS', name, JSON.stringify({ light, dark }));
      await context.close();
    }
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto(process.env.HOMEPAGE_URL || 'http://127.0.0.1:4321/');
    assert.equal(await page.locator('.book-card').count(), 12);
    await page.locator('[data-filter="agents"]').click();
    assert.equal(await page.locator('.book-card:visible').count(), 6);
    await page.locator('.reading-path a[href="#book-java"]').click();
    assert.equal(await page.locator('.book-card:visible').count(), 12);
    assert(!(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)), 'homepage mobile overflow');
    await context.close();
    // A denied storage API must not prevent reading or switching themes.
    const blocked = await browser.newContext();
    await blocked.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage disabled'); } }));
    const blockedPage = await blocked.newPage();
    await blockedPage.goto(new URL(books[8][1], base).href);
    await settle(blockedPage);
    await toggle(blockedPage);
    assert.equal((await measurements(blockedPage)).background, 'rgb(28, 31, 36)');
    await blocked.close();
    // Native HTML remains readable when JavaScript is disabled.
    const native = await browser.newContext({ javaScriptEnabled: false, colorScheme: 'dark' });
    const nativePage = await native.newPage();
    await nativePage.goto(new URL(books[3][1], base).href);
    assert((await nativePage.locator('article').innerText()).length > 1000);
    assert.equal((await nativePage.locator('body').evaluate(e => getComputedStyle(e).backgroundColor)), 'rgb(247, 247, 243)');
    await native.close();
    const shared = await browser.newContext();
    const sharedPage = await shared.newPage();
    await sharedPage.goto(new URL(books[8][1], base).href);
    await settle(sharedPage);
    await toggle(sharedPage);
    for (const index of [6, 11, 1]) {
      await sharedPage.goto(new URL(books[index][1], base).href);
      await settle(sharedPage);
      assert.equal((await measurements(sharedPage)).background, 'rgb(28, 31, 36)', books[index][0] + ' shares theme across books');
    }
    await shared.close();
    console.log('PASS homepage filters, reading routes, storage denied, no JavaScript, cross-book theme');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });

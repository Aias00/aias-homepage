import { expect, test } from '@playwright/test';
import { books, topics } from '../src/data/books';

test('renders the complete catalog and working reading routes', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('.book-card')).toHaveCount(books.length);
  for (const book of books) {
    const card = page.locator(`#book-${book.id}`);
    await expect(card.locator('h3')).toHaveText(book.title);
    await expect(card.locator('.book-read')).toHaveAttribute('href', book.readUrl);
    await expect(card.locator('.book-download')).toHaveAttribute('href', book.epubUrl);
  }
  await expect(page.locator('.shelf-index')).toContainText(`${books.length} BOOKS`);
  for (const topic of topics) {
    const count = books.filter(book => book.topic === topic.id).length;
    await page.locator(`[data-filter="${topic.id}"]`).click();
    await expect(page.locator('.book-card:visible')).toHaveCount(count);
    await expect(page.locator(`[data-filter="${topic.id}"]`)).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#shelf-results')).toContainText(`显示 ${count} / ${books.length}`);
  }
  await page.locator('[data-filter="agents"]').click();
  await page.locator('.reading-path a[href="#book-java"]').click();
  await expect(page.locator('#book-java')).toBeVisible();
  await expect(page.locator('.book-card:visible')).toHaveCount(books.length);
  const missingAnchors = await page.locator('a[href^="#"]').evaluateAll(links => links
    .map(link => link.getAttribute('href')!.slice(1))
    .filter(id => id && !document.getElementById(id)));
  expect(missingAnchors).toEqual([]);
  expect(errors).toEqual([]);
});

for (const width of [320, 390, 820]) {
  test(`readable mobile typography and touch targets at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    const metrics = await page.evaluate(() => {
      const size = (selector: string) => parseFloat(getComputedStyle(document.querySelector(selector)!).fontSize);
      return {
        width: document.documentElement.scrollWidth,
        title: size('.book-info h3'),
        description: size('.book-description'),
        action: size('.book-read'),
        height: document.querySelector('.book-read')!.getBoundingClientRect().height,
      };
    });
    expect(metrics.width).toBeLessThanOrEqual(width);
    expect(metrics.title).toBeGreaterThanOrEqual(20);
    expect(metrics.description).toBeGreaterThanOrEqual(16);
    expect(metrics.action).toBeGreaterThanOrEqual(16);
    expect(metrics.height).toBeGreaterThanOrEqual(48);
    await page.locator('[data-filter="agents"]').click();
    await expect(page.locator('.book-card:visible')).toHaveCount(books.filter(book => book.topic === 'agents').length);
  });
}

test('static HTML remains readable without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(page.locator('.book-card:visible')).toHaveCount(books.length);
  await expect(page.locator('.book-read')).toHaveCount(books.length);
  await expect(page.locator('.book-download')).toHaveCount(books.length);
  await expect(page.locator('#shelf-toolbar')).toBeHidden();
  await expect(page.locator('h1')).toContainText('Aias');
  await context.close();
});

test('clock and static particle illustration work with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('#beijing-time')).toHaveText(/^\d{2}:\d{2}:\d{2}$/);
  await expect(page.locator('#year')).toHaveText(String(new Date().getFullYear()));
  await expect.poll(() => page.locator('#orb').evaluate(element => {
    const canvas = element as HTMLCanvasElement;
    const pixels = canvas.getContext('2d')!.getImageData(0, 0, canvas.width, canvas.height).data;
    return pixels.some((value, index) => index % 4 === 3 && value > 0);
  })).toBe(true);
});

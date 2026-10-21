import { expect, test } from '@playwright/test';
import { books, topics } from '../src/data/books';

const pages = [
  { path: '/', label: '首页', content: '.hero' },
  { path: '/books/', label: '书架', content: '#books' },
  { path: '/about/', label: '关于', content: '#about' },
];

test('each page has its own content, metadata, and active navigation', async ({ page }) => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const route of pages) {
    await page.goto(route.path);
    await expect(page.locator(route.content)).toBeVisible();
    await expect(page.locator('h1')).toHaveCount(1);
    const navigation = page.getByRole('navigation', { name: '主要导航' });
    await expect(navigation.getByRole('link')).toHaveCount(pages.length);
    for (const destination of pages) {
      await expect(navigation.getByRole('link', { name: destination.label, exact: true })).toHaveAttribute('href', destination.path);
    }
    await expect(navigation.locator('[aria-current="page"]')).toHaveText(route.label);
    await expect(navigation.locator('[aria-current]')).toHaveCount(1);
    const canonical = `https://aias00.github.io${route.path}`;
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', canonical);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', canonical);
    const title = await page.title();
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(title).toContain('Aias');
    expect(description).toBeTruthy();
    titles.add(title);
    descriptions.add(description!);
    await expect(page.locator('.book-card')).toHaveCount(route.path === '/books/' ? books.length : 0);
    await expect(page.locator('#about')).toHaveCount(route.path === '/about/' ? 1 : 0);
    await expect(page.locator('#contact')).toHaveCount(route.path === '/about/' ? 1 : 0);
    await expect(page.locator('.hero')).toHaveCount(route.path === '/' ? 1 : 0);
  }
  expect(titles.size).toBe(pages.length);
  expect(descriptions.size).toBe(pages.length);
  await page.goto('/');
  await page.getByRole('link', { name: '浏览电子书架', exact: false }).click();
  await expect(page).toHaveURL(/\/books\/$/);
});

test('renders the complete catalog and working reading routes', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/books/');
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
  test(`all pages fit mobile and keep readable books at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    for (const route of pages) {
      await page.goto(route.path);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    }
    await page.goto('/books/');
    const metrics = await page.evaluate(() => {
      const size = (selector: string) => parseFloat(getComputedStyle(document.querySelector(selector)!).fontSize);
      return {
        title: size('.book-info h3'),
        description: size('.book-description'),
        action: size('.book-read'),
        height: document.querySelector('.book-read')!.getBoundingClientRect().height,
      };
    });
    expect(metrics.title).toBeGreaterThanOrEqual(20);
    expect(metrics.description).toBeGreaterThanOrEqual(16);
    expect(metrics.action).toBeGreaterThanOrEqual(16);
    expect(metrics.height).toBeGreaterThanOrEqual(48);
    await page.locator('[data-filter="agents"]').click();
    await expect(page.locator('.book-card:visible')).toHaveCount(books.filter(book => book.topic === 'agents').length);
  });
}

test('static HTML supports navigation and reading without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(page.locator('h1')).toContainText('Aias');
  const navigation = page.getByRole('navigation', { name: '主要导航' });
  await navigation.getByRole('link', { name: '书架', exact: true }).click();
  await expect(page).toHaveURL(/\/books\/$/);
  await expect(page.locator('.book-card:visible')).toHaveCount(books.length);
  await expect(page.locator('.book-read')).toHaveCount(books.length);
  await expect(page.locator('.book-download')).toHaveCount(books.length);
  await expect(page.locator('#shelf-toolbar')).toBeHidden();
  await navigation.getByRole('link', { name: '关于', exact: true }).click();
  await expect(page).toHaveURL(/\/about\/$/);
  await expect(page.locator('#about')).toBeVisible();
  await expect(page.locator('#contact')).toBeVisible();
  await navigation.getByRole('link', { name: '首页', exact: true }).click();
  await expect(page).toHaveURL(baseURL! + '/');
  await expect(page.locator('.hero')).toBeVisible();
  await context.close();
});

test('legacy homepage anchors open the corresponding page', async ({ page }) => {
  for (const [hash, destination, target] of [
    ['books', '/books/', '#books'],
    ['book-java', '/books/#book-java', '#book-java'],
    ['about', '/about/', '#about'],
    ['contact', '/about/#contact', '#contact'],
  ]) {
    await page.goto(`/#${hash}`);
    await expect.poll(() => new URL(page.url()).pathname + new URL(page.url()).hash).toBe(destination);
    await expect(page.locator(target)).toBeVisible();
  }
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

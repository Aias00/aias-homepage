// Shared behavior for all static pages. Navigation state is rendered by Astro.
(() => {
  function redirectLegacyHash() {
    if (location.pathname !== '/') return false;
    const hash = location.hash;
    let path;
    if (hash === '#books' || /^#book-[a-z0-9-]+$/.test(hash)) path = '/books/';
    else if (hash === '#about' || hash === '#contact') path = '/about/';
    else return false;
    const destination = new URL(path, location.origin);
    destination.search = location.search;
    if (hash.startsWith('#book-') || hash === '#contact') destination.hash = hash;
    location.replace(destination.href);
    return true;
  }
  if (redirectLegacyHash()) return;
  addEventListener('hashchange', redirectLegacyHash);

  document.getElementById('year').textContent = new Date().getFullYear();
  const time = document.getElementById('beijing-time');
  const clock = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  });
  function updateClock() {
    const now = new Date();
    time.textContent = clock.format(now);
    time.dateTime = now.toISOString();
  }
  updateClock();
  let timer = setInterval(updateClock, 1000);
  document.addEventListener('visibilitychange', () => {
    clearInterval(timer);
    if (!document.hidden) {
      updateClock();
      timer = setInterval(updateClock, 1000);
    }
  });
})();

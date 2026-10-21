// Progressive enhancement: all book cards and links exist in the static HTML.
(() => {
  const books = [...document.querySelectorAll('.book-card')];
  const filters = [...document.querySelectorAll('.shelf-filter')];
  const results = document.getElementById('shelf-results');
  function filterBooks(topic) {
    for (const book of books) book.hidden = topic !== 'all' && book.dataset.topic !== topic;
    for (const button of filters) button.setAttribute('aria-pressed', String(button.dataset.filter === topic));
    const visible = books.filter(book => !book.hidden).length;
    results.textContent = topic === 'all' ? `共 ${visible} 本电子书` : `显示 ${visible} / ${books.length} 本电子书`;
  }
  for (const button of filters) button.addEventListener('click', () => filterBooks(button.dataset.filter));
  document.getElementById('shelf-toolbar').hidden = false;
  function revealLinkedBook() {
    const book = books.find(item => '#' + item.id === location.hash);
    if (book && book.hidden) {
      filterBooks('all');
      book.scrollIntoView();
    }
  }
  for (const link of document.querySelectorAll('.reading-path a')) link.addEventListener('click', () => filterBooks('all'));
  addEventListener('hashchange', revealLinkedBook);
  revealLinkedBook();
})();

export function initForumIndex(): void {
  const cards = [...document.querySelectorAll<HTMLElement>('[data-forum-card]')];
  const sortButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-forum-sort]')];
  const filterLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-forum-filter]')];
  const searchInput = document.querySelector<HTMLInputElement>('[data-forum-search]');
  const list = document.querySelector<HTMLElement>('.forum-post-list');
  const pagination = document.querySelector<HTMLElement>('[data-forum-pagination]');
  const pageButtons = document.querySelector<HTMLElement>('[data-page-buttons]');
  const pageStatus = document.querySelector<HTMLElement>('[data-page-status]');
  const countStatus = document.querySelectorAll<HTMLElement>('[data-forum-count]');
  const emptyState = document.querySelector<HTMLElement>('[data-forum-empty]');
  const previousButton = document.querySelector<HTMLButtonElement>('[data-page-previous]');
  const nextButton = document.querySelector<HTMLButtonElement>('[data-page-next]');
  const pageSize = 10;
  const params = new URLSearchParams(window.location.search);
  let currentPage = Number(params.get('page')) || 1;
  let activeFilter = params.get('category') ?? 'all';
  let activeSort = params.get('sort') ?? 'popular';

  if (searchInput && !searchInput.value) {
    searchInput.value = params.get('q') ?? '';
  }

  function writeUrl() {
    const url = new URL(window.location.href);
    if (activeFilter === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', activeFilter);
    if (activeSort === 'popular') url.searchParams.delete('sort');
    else url.searchParams.set('sort', activeSort);
    const query = searchInput?.value.trim() ?? '';
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    if (currentPage <= 1) url.searchParams.delete('page');
    else url.searchParams.set('page', String(currentPage));
    history.replaceState({}, '', url);
  }

  function setPressed(items: HTMLElement[], current: HTMLElement | undefined) {
    items.forEach((item) => {
      const active = item === current;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
      if (active) item.setAttribute('aria-current', 'true');
      else item.removeAttribute('aria-current');
    });
  }

  function updateForum() {
    const query = searchInput?.value.trim().toLocaleLowerCase() ?? '';
    const ordered = [...cards].sort((a, b) => {
      if (activeSort === 'latest') return Number(b.dataset.published) - Number(a.dataset.published);
      if (activeSort === 'top') return Number(b.dataset.comments) - Number(a.dataset.comments);
      return Number(b.dataset.upvotes ?? 0) - Number(a.dataset.upvotes ?? 0) || Number(a.dataset.order) - Number(b.dataset.order);
    });
    const matching = ordered.filter((card) => {
      const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
      return matchesCategory && (!query || card.textContent?.toLocaleLowerCase().includes(query));
    });
    const pageCount = Math.max(1, Math.ceil(matching.length / pageSize));
    currentPage = Math.min(Math.max(1, currentPage), pageCount);
    const firstVisible = (currentPage - 1) * pageSize;
    const visibleCards = new Set(matching.slice(firstVisible, firstVisible + pageSize));

    ordered.forEach((card) => {
      card.hidden = !visibleCards.has(card);
      list?.append(card);
    });

    const label = `${matching.length} ${matching.length === 1 ? 'discussion' : 'discussions'}`;
    countStatus.forEach((node) => {
      node.textContent = label;
    });
    if (emptyState) emptyState.hidden = matching.length > 0;
    if (pagination) pagination.hidden = matching.length <= pageSize;
    if (pageStatus) {
      pageStatus.textContent = matching.length
        ? `Showing ${firstVisible + 1}–${Math.min(firstVisible + pageSize, matching.length)} of ${matching.length}`
        : '0 discussions';
    }
    if (previousButton) previousButton.disabled = currentPage <= 1;
    if (nextButton) nextButton.disabled = currentPage >= pageCount;
    if (pageButtons) {
      pageButtons.replaceChildren(
        ...Array.from({ length: pageCount }, (_, index) => {
          const button = document.createElement('button');
          const page = index + 1;
          button.type = 'button';
          button.textContent = String(page);
          button.setAttribute('aria-label', `Page ${page}`);
          if (page === currentPage) button.setAttribute('aria-current', 'page');
          button.addEventListener('click', () => {
            currentPage = page;
            writeUrl();
            updateForum();
          });
          return button;
        }),
      );
    }
    writeUrl();
  }

  sortButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeSort = button.dataset.forumSort ?? 'popular';
      setPressed(sortButtons, button);
      currentPage = 1;
      updateForum();
    });
  });

  filterLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      activeFilter = link.dataset.forumFilter ?? 'all';
      setPressed(filterLinks, link);
      currentPage = 1;
      updateForum();
    });
  });

  searchInput?.addEventListener('input', () => {
    currentPage = 1;
    updateForum();
  });
  previousButton?.addEventListener('click', () => {
    currentPage = Math.max(1, currentPage - 1);
    updateForum();
  });
  nextButton?.addEventListener('click', () => {
    currentPage += 1;
    updateForum();
  });

  const initialSort = sortButtons.find((button) => button.dataset.forumSort === activeSort) ?? sortButtons[0];
  setPressed(sortButtons, initialSort);
  const initialFilter = filterLinks.find((link) => link.dataset.forumFilter === activeFilter);
  if (initialFilter) setPressed(filterLinks, initialFilter);
  else activeFilter = 'all';
  updateForum();
}

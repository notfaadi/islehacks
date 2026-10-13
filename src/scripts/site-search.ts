import type { SearchRecord } from '../data/searchIndex';

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function scoreRecord(record: SearchRecord, query: string) {
  const q = normalize(query);
  if (!q) return 0;
  const title = normalize(record.title);
  const desc = normalize(record.desc);
  if (title.startsWith(q)) return 4;
  if (title.includes(q)) return 3;
  if (desc.includes(q)) return 2;
  return 0;
}

function parseIndex(root: HTMLElement): SearchRecord[] {
  const source =
    root.querySelector('[data-site-search-index]') ?? root;
  const raw = source.textContent ?? source.getAttribute('data-site-search-index');
  if (!raw) return [];
  try {
    return JSON.parse(raw) as SearchRecord[];
  } catch {
    return [];
  }
}

function renderResults(list: HTMLUListElement, items: SearchRecord[], query: string) {
  list.innerHTML = '';
  if (!query.trim()) {
    const empty = document.createElement('li');
    empty.className = 'site-search__empty';
    empty.textContent = 'Type to search articles, forum threads, FAQ, and pages.';
    list.appendChild(empty);
    return;
  }

  const matches = items
    .map((item) => ({ item, score: scoreRecord(item, query) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, 8);

  if (!matches.length) {
    const empty = document.createElement('li');
    empty.className = 'site-search__empty';
    empty.textContent = 'No matches. Try different keywords.';
    list.appendChild(empty);
    return;
  }

  for (const { item } of matches) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.className = 'site-search__result';
    link.href = item.href;
    link.innerHTML = `<span class="site-search__type">${item.type}</span><span class="site-search__title">${item.title}</span><span class="site-search__desc">${item.desc}</span>`;
    li.appendChild(link);
    list.appendChild(li);
  }
}

export function initSiteSearch(root: HTMLElement) {
  const index = parseIndex(root);
  const toggle = root.querySelector<HTMLButtonElement>('[data-site-search-toggle]');
  const panel = root.querySelector<HTMLElement>('[data-site-search-panel]');
  const input = root.querySelector<HTMLInputElement>('[data-site-search-input]');
  const results = root.querySelector<HTMLUListElement>('[data-site-search-results]');
  const form = root.querySelector<HTMLFormElement>('form');

  if (!toggle || !panel || !input || !results || !form) return;

  const close = () => {
    root.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
  };

  const open = () => {
    root.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    input.focus();
    renderResults(results, index, input.value);
  };

  toggle.addEventListener('click', () => {
    if (root.classList.contains('is-open')) close();
    else open();
  });

  input.addEventListener('input', () => renderResults(results, index, input.value));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    window.location.href = `/search/?q=${encodeURIComponent(q)}`;
  });

  document.addEventListener('click', (event) => {
    if (!root.classList.contains('is-open')) return;
    const target = event.target as Node;
    if (!root.contains(target)) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

export function initSiteSearchAll() {
  document.querySelectorAll<HTMLElement>('[data-site-search]').forEach((root) => initSiteSearch(root));
}

export function filterSearchIndex(index: SearchRecord[], query: string, limit = 48) {
  const q = normalize(query);
  if (!q) return [];
  return index
    .map((item) => ({ item, score: scoreRecord(item, q) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map((entry) => entry.item);
}

import { initSmoothScroll, smoothScrollTo } from './smooth-scroll';

function initFonts() {
  const root = document.documentElement;

  const markReady = () => {
    root.classList.remove('fonts-pending');
    root.classList.add('fonts-ready');
  };

  if (!document.fonts?.ready) {
    markReady();
    return;
  }

  document.fonts.ready.then(markReady).catch(markReady);
}

function initNavHighlight() {
  const path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';

  document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((link) => {
    const href = link.getAttribute('href') ?? '';
    const linkPath = href.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
    let isActive = false;

    if (linkPath === '/') {
      isActive = path === '/';
    } else {
      isActive = path === linkPath || path.startsWith(`${linkPath}/`);
    }

    link.classList.toggle('is-active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function initInPageScroll() {
  document.querySelectorAll<HTMLElement>('[data-scroll-target]').forEach((el) => {
    el.addEventListener('click', (event) => {
      const id = el.getAttribute('data-scroll-target');
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      smoothScrollTo(target);
    });
  });
}

function initSkipLink() {
  document.querySelectorAll<HTMLElement>('[data-skip-to-main]').forEach((button) => {
    button.addEventListener('click', () => {
      const main = document.getElementById('main-content');
      if (!main) return;

      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
      smoothScrollTo(main);
    });
  });
}

function initFaqFilters() {
  document.querySelectorAll('[data-faq-filters]').forEach((container) => {
    const section = container.closest('[data-faq-section]');
    const list = section?.querySelector('[data-faq-list]');
    if (!list) return;

    const items = list.querySelectorAll<HTMLElement>('[data-faq-topic]');
    const chips = container.querySelectorAll<HTMLButtonElement>('[data-faq-filter]');
    const search = container.querySelector<HTMLInputElement>('[data-faq-search]');

    const apply = () => {
      const topic = container.querySelector<HTMLButtonElement>('[data-faq-filter].is-active')?.getAttribute('data-faq-filter') ?? 'all';
      const query = search?.value.trim().toLocaleLowerCase() ?? '';
      items.forEach((item) => {
        const itemTopic = item.getAttribute('data-faq-topic');
        const matchesTopic = topic === 'all' || itemTopic === topic;
        const matchesQuery = !query || (item.textContent?.toLocaleLowerCase().includes(query) ?? false);
        item.toggleAttribute('data-hidden', !(matchesTopic && matchesQuery));
      });
    };

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.classList.toggle('is-active', c === chip));
        apply();
      });
    });
    search?.addEventListener('input', apply);
  });
}

function initThemeMetaColor() {
  const metaTheme = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!metaTheme) return;

  const update = () => {
    metaTheme.content = document.documentElement.classList.contains('dark') ? '#7F3DEE' : '#f5f7fa';
  };

  update();
  const observer = new MutationObserver(update);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
}

function bootSite() {
  initFonts();
  initFaqFilters();
  initNavHighlight();
  initInPageScroll();
  initSkipLink();
  initThemeMetaColor();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootSite);
} else {
  bootSite();
}

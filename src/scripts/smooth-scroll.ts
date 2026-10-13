import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

const creamEase = (t: number) => 1 - (1 - t) ** 4;

function navOffset(): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--floating-nav-clearance');
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? -parsed : -84;
}

function shouldPrevent(node: HTMLElement) {
  return Boolean(
    node.closest('[data-lenis-prevent]') ||
      node.closest('.product-gallery__thumbs') ||
      node.classList.contains('product-gallery__thumbs'),
  );
}

export function initSmoothScroll() {
  if (typeof window === 'undefined') return null;
  if (window.__lenis) return window.__lenis;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  const lenis = new Lenis({
    autoRaf: true,
    autoResize: true,
    lerp: 0.048,
    wheelMultiplier: 0.62,
    touchMultiplier: 1,
    smoothWheel: true,
    syncTouch: false,
    allowNestedScroll: true,
    overscroll: false,
    stopInertiaOnNavigate: true,
    respectReducedMotion: true,
    prevent: shouldPrevent,
    anchors: {
      offset: navOffset(),
      duration: 1.65,
      easing: creamEase,
    },
  });

  window.__lenis = lenis;
  return lenis;
}

export function smoothScrollTo(target: HTMLElement | number) {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(target, {
      offset: typeof target === 'number' ? 0 : navOffset(),
      duration: 1.65,
      easing: creamEase,
    });
    return;
  }

  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
    return;
  }

  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

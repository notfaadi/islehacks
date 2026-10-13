import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  isle: 'the-isle',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal checkout path shown to users (hides external URL on hover). */
export function checkoutPath(product: CheckoutProduct = 'isle'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Default product checkout redirect. */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('isle');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(_slug: string): string {
  return checkoutPath('isle');
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (
    href.includes('%2Fproducts%2Fthe-isle-novaxware') ||
    href.includes('/products/the-isle-novaxware') ||
    href.includes('%2Fproducts%2Fthe-isle') ||
    href.includes('/products/the-isle')
  ) {
    return checkoutPath('isle');
  }

  return href;
}

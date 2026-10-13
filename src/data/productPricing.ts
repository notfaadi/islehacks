export type ProductPlanId = 'monthly' | 'lifetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
  duration: string;
}

const standardPlans: ProductPlan[] = [
  { id: 'monthly', label: 'Monthly', priceUsd: 35, priceNote: 'USD / month', duration: 'P30D' },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'USD · one-time', duration: 'P99Y' },
];

export function getProductPlans(_productSlug: string): ProductPlan[] {
  return standardPlans;
}

export function formatPlanPrice(usd: number): string {
  return `$${usd}`;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const normalized = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalized}${planId}/`;
}

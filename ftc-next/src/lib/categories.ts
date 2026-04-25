export const CATEGORY_STYLES: Record<string, { bg: string; text: string }> = {
  ulam: { bg: '#5B9BD5', text: '#ffffff' },
  'kape-corner': { bg: '#E87D5A', text: '#ffffff' },
  'food-trips': { bg: '#F6C94E', text: '#1C3557' },
};

export const CATEGORY_LABELS: Record<string, string> = {
  ulam: 'Ulam Stories',
  'kape-corner': 'Kape Corner',
  'food-trips': 'Food Trips',
};

export function getCategoryStyle(slug: string) {
  return CATEGORY_STYLES[slug] ?? { bg: '#F6C94E', text: '#1C3557' };
}

export function getCategoryLabel(slug: string) {
  return CATEGORY_LABELS[slug] ?? slug;
}

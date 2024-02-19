
export const FONT_KEYS = [
  'sans',
  'serif',
  'sans-serif',
  'mono',
  'cursive',
] as const;

export const FONT_SHARE_CATEGORIES = [
  'sans',
  'serif',
  'slab',
  'display',
  'handwritten',
  'script',
] as const;

export const FONT_SHARE_NAMES = [
  'Supreme',
  'General Sans',
] as const;

export * from './google/categories';
export * from './google/fonts';
export * from './google/names';
export * from './bunny/categories';
export * from './bunny/fonts';
export * from './bunny/names';
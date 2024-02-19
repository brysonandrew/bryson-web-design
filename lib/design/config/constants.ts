export const PALETTE_COLORS_DARK_MODE = [
  'dark',
  'light',
] as const;

export const PALETTE_COLORS_LIGHT_MODE = [
  'light',
  'dark',
] as const;

export const PALETTE_COLORS = [
  'primary',
  'secondary',
  'accent',
] as const;

export const PALETTE_TITLES = [
  null,
  'title-page',
  'title-section',
  'title-pricing',
] as const;

export const CASCADE_RECORD = PALETTE_COLORS.reduce(
  (a) => {
    // a.remainder = a.remainder / 2;
    a.heights.push(a.remainder);
    return a;
  },
  { heights: [] as number[], remainder: 100 },
);

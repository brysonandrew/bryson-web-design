export const GRADIENT = {
  standard: 'bg-gradient-to-r from-standard to-indigo',
  plus: 'bg-gradient-to-r from-plus to-emerald',
  select: 'bg-gradient-to-r from-select to-fuchsia',
} as const;

export type TGradientShortcut = keyof typeof GRADIENT;

export const GRADIENT = {
  'gradient-standard':
    'bg-gradient-to-r from-blue to-indigo',
  'gradient-plus':
    'bg-gradient-to-r from-green to-emerald',
  'gradient-select':
    'bg-gradient-to-r from-purple to-fuchsia',
} as const;

export type TGradientShortcut = keyof typeof GRADIENT;

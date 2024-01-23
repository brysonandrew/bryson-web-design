import { StaticShortcutMap } from "unocss";

export const GRADIENT: StaticShortcutMap = {
  'gradient-standard':
    'bg-gradient-to-r from-standard to-indigo',
  'gradient-plus':
    'bg-gradient-to-r from-plus to-emerald',
  'gradient-select':
    'bg-gradient-to-r from-select to-fuchsia',
} as const;

export type TGradientShortcut = keyof typeof GRADIENT;

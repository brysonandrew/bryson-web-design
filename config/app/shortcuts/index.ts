import { GLOW } from '@brysonandrew/contact/variants/glow';
import { StaticShortcutMap } from 'unocss';
import { BASE } from './base';
import { GRADIENT } from './gradient';

export const CUSTOM_SHORTCUTS: StaticShortcutMap = {
  ...BASE,
  ...GRADIENT,
  ...GLOW,
  'title-input': 'title-main',
} as const;

export type TCustomShortcuts = typeof CUSTOM_SHORTCUTS;

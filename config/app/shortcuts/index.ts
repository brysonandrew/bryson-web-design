import { GLOW } from '@brysonandrew/contact/variants/glow';
import { SHORTCUTS as FADE } from '@brysonandrew/fade/shortcuts';

import { StaticShortcutMap } from 'unocss';
import { BASE } from './base';
import { GRADIENT } from './gradient';

const TEXT_CUSTOM: StaticShortcutMap = {
  'title-pricing':
    'font-semibold text-main capitalize char-gap-0_006725',
};

export const CUSTOM_SHORTCUTS: StaticShortcutMap = {
  ...BASE,
  ...GRADIENT,
  ...GLOW,
  ...FADE,
  ...TEXT_CUSTOM,
  'title-input': 'title-main',
} as const;

export type TCustomShortcuts = typeof CUSTOM_SHORTCUTS;

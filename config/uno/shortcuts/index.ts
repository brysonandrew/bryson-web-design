import type { StaticShortcutMap } from 'unocss';
import { BACKGROUND } from './background';
import { FLEX } from './flex';
import { INPUT } from './input';
import { INTERACTIVE } from './interactive';
import { LAYOUT } from './layout';
import { TEXT } from './text';

export const SHORTCUTS: StaticShortcutMap = {
  'dark-mode-transition': 'transition-colors duration-1000',
  ...TEXT,
  ...BACKGROUND,
  ...FLEX,
  ...INPUT,
  ...INTERACTIVE,
  ...LAYOUT,
} as const;

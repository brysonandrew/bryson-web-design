import type { StaticShortcutMap } from 'unocss';
import { BACKGROUND, COLORS } from './colors';
import { FLEX } from './flex';
import { INPUT } from './input';
import { INTERACTIVE } from './interactive';
import { LAYOUT } from './layout';

export const SHORTCUTS: StaticShortcutMap = {
  ...COLORS,
  ...FLEX,
  ...INPUT,
  ...INTERACTIVE,
  ...LAYOUT,
} as const;

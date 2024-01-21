import type { StaticShortcutMap } from 'unocss';
import { CUSTOM_SHORTCUTS } from '../../app/shortcuts';
import { ANIMATION } from './animation';
import { BACKGROUND } from './background';
import { FLEX } from './flex';
import { INPUT } from './input';
import { INTERACTIVE } from './interactive';
import { LAYOUT } from './layout';
import { SHORTCUTS as TEXT } from './text';

export const SHORTCUTS: StaticShortcutMap = {
  ...ANIMATION,
  ...TEXT,
  ...BACKGROUND,
  ...FLEX,
  ...INPUT,
  ...INTERACTIVE,
  ...LAYOUT,
  ...CUSTOM_SHORTCUTS,
} as const;

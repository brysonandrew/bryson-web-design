import type { StaticShortcutMap } from 'unocss';
import { CUSTOM_SHORTCUTS } from '../../app/shortcuts';
import { ANIMATION } from './animation';
import { BACKGROUND } from './background';
import { FLEX } from './flex';
import { INTERACTIVE } from './interactive';
import { LAYOUT } from './layout';
import { SHORTCUTS as TEXT } from './text';

export const SHORTCUTS: StaticShortcutMap = {
  ...ANIMATION,
  ...TEXT,
  ...BACKGROUND,
  ...FLEX,
  ...INTERACTIVE,
  ...LAYOUT,
  ...CUSTOM_SHORTCUTS,
} as const;

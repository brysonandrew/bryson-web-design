import type { StaticShortcutMap } from 'unocss';
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
} as const;

export * from './animation';
export * from './background';
export * from './flex';
export * from './interactive';
export * from './layout';
export * from './text/color';
export * from './text';

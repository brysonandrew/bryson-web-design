import type { StaticShortcutMap } from 'unocss';
import { BACKGROUND } from './background';
import { FLEX } from './flex';
import { INTERACTIVE } from './interactive';
import { LAYOUT } from './layout';
import { SHORTCUTS as TEXT } from './text';
import { OPACITY_TRANSITION_UNO_SHORTCUTS } from './opacity';

export const SHORTCUTS: StaticShortcutMap = {
  ...OPACITY_TRANSITION_UNO_SHORTCUTS,
  ...TEXT,
  ...BACKGROUND,
  ...FLEX,
  ...INTERACTIVE,
  ...LAYOUT,
} as const;

export * from './background';
export * from './flex';
export * from './interactive';
export * from './layout';
export * from './opacity';
export * from './text/color';
export * from './text';
export * from './neu/constants';
export * from './neu/format';
export * from './neu/mappers';
export * from './neu/number';
export * from './neu/resolveHsl';
export * from './neu/resolveNeuClasses';
export * from './neu/resolveNeuShadow';
export * from './neu/types';
export * from './neu/ranges';
export * from './neu/ranges/resolveRange';

import type { Rule } from 'unocss';
import type { TTheme } from '../theme';
import {
  GLOW_INTERACTIVE_DARK,
  GLOW_INTERACTIVE_DARK_LG,
  GLOW_BABY_BLUE,
  GLOW_INTERACTIVE_LIGHT,
  GLOW_INTERACTIVE_LIGHT_LG,
  GLOW_CURSOR_LIGHT,
} from '.';

export const RULES: Rule<TTheme>[] = [
  [
    'glow-interactive-dark',
    {
      'box-shadow': GLOW_INTERACTIVE_DARK,
    },
  ],
  [
    'glow-interactive-dark-lg',
    {
      'box-shadow': GLOW_INTERACTIVE_DARK_LG,
    },
  ],
  [
    'glow-baby-blue',
    {
      'box-shadow': GLOW_BABY_BLUE,
    },
  ],
  [
    'glow-interactive-light',
    {
      'box-shadow': GLOW_INTERACTIVE_LIGHT,
    },
  ],
  [
    'glow-interactive-light-lg',
    {
      'box-shadow': GLOW_INTERACTIVE_LIGHT_LG,
    },
  ],
  [
    'glow-cursor-light',
    { 'box-shadow': GLOW_CURSOR_LIGHT },
  ],
];

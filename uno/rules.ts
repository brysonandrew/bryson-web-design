import { Rule } from 'unocss';
import { RULES as SHADOW_RULES } from './shadows/rules';
import { RULES as TEXT_STROKE_BABY_BLUE } from './text-stroke';

import { TTheme } from './theme';

export const RULES: Rule<TTheme>[] = [
  ['placeholder', { transform: 'scale(8)' }],
  ['+placeholder', { transform: 'scale(16)' }],
  ['++placeholder', { transform: 'scale(28)' }],
  ...SHADOW_RULES,
  ...TEXT_STROKE_BABY_BLUE,
];

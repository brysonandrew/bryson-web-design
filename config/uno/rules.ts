import { Rule } from 'unocss';
import { RULES as SHADOW_RULES } from './shadows';
import { RULES as TEXT_STROKE_BABY_BLUE } from './text-stroke';

import { TTheme } from './theme';

export const RULES: Rule<TTheme>[] = [
  ['placeholder', { transform: 'scale(8)' }],
  ['+placeholder', { transform: 'scale(16)' }],
  ['++placeholder', { transform: 'scale(28)' }],
  [
    'mask-diagonal-t-l',
    {
      'clip-path': 'polygon(0 0, 100% 0, 0 100%, 0 100%)',
    },
  ],
  [
    'mask-diagonal-b-r',
    {
      'clip-path':
        'polygon(100% 100%, 100% 0, 0 100%, 0 100%)',
    },
  ],
  ...SHADOW_RULES,
  ...TEXT_STROKE_BABY_BLUE,
];

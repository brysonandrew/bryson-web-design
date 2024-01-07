import { Rule } from 'unocss';
import { RULES as SHADOW_RULES } from './glow';
import { RULES as TEXT_STROKE } from './text-stroke';

import { TTheme } from '../theme';

export const RULES: Rule<TTheme>[] = [
  ['placeholder', { transform: 'scale(8)' }],
  ['+placeholder', { transform: 'scale(16)' }],
  ['++placeholder', { transform: 'scale(28)' }],
  [
    'mask-diagonal-tl',
    {
      'clip-path': 'polygon(0 0, 100% 0, 0 100%, 0 100%)',
    },
  ],
  [
    'mask-diagonal-br',
    {
      'clip-path':
        'polygon(100% 100%, 100% 0, 0 100%, 0 100%)',
    },
  ],
  ...SHADOW_RULES,
  ...TEXT_STROKE,
];

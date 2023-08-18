import type { Rule } from 'unocss';
import type { TTheme } from './theme';
import { RULES as SHADOW_RULES } from './shadows/rules';

export const RULES: Rule<TTheme>[] = [
  ...SHADOW_RULES,
  ['placeholder', { transform: 'scale(8)' }],
  ['+placeholder', { transform: 'scale(16)' }],
  ['++placeholder', { transform: 'scale(28)' }],
  [
    'text-stroke-baby-blue',
    { '-webkit-text-stroke': '1px var(--baby-blue)' },
  ],
  [
    'text-stroke-baby-blue-02',
    { '-webkit-text-stroke': '1px var(--baby-blue-02)' },
  ],
  [
    'text-stroke-baby-blue-01',
    { '-webkit-text-stroke': '1px var(--baby-blue-01)' },
  ],
  [
    'text-stroke-gray',
    { '-webkit-text-stroke': '1px var(--gray-1)' },
  ],
];

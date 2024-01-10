import { TTheme } from '@uno/theme';
import { Rule } from 'unocss';

export const RULES: Rule<TTheme>[] = [
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
];

import { TColorKey } from '@app/colors';
import type { Rule } from 'unocss';
import type { TTheme } from '../theme';

const resolveTextStroke = (
  colors: TColorKey[],
  weight = 1,
): Rule<TTheme>[] => {
  return colors.map((color: TColorKey) => {
    return [
      `text-stroke-${color}`,
      {
        'text-stroke': `${weight}px var(--${color})`,
        '-webkit-text-stroke': `${weight}px var(--${color})`,
      },
    ];
  });
};

export const RULES = resolveTextStroke(
  [
    'black-01',
    'gray',
    'teal',
    'teal-01',
    'teal-02',
    'teal-04',
    'teal-06',
    'baby-blue',
    'baby-blue-01',
    'baby-blue-02',
  ],
  3,
);

import { TColorKey } from '@app/colors/types';
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
    'secondary',
    'secondary-01',
    'secondary-02',
    'secondary-04',
    'secondary-06',
    'accent',
    'accent-01',
    'accent-02',
  ],
  3,
);

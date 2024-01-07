import { TColorKey } from '@t/css';
import type { Rule } from 'unocss';
import type { TTheme } from '../theme';

const resolveTextStroke = (
  colors: TColorKey[],
): Rule<TTheme>[] => {
  return colors.map((color: TColorKey) => {
    return [
      `text-stroke-${color}`,
      {
        'text-stroke': `1px var(--${color})`,
        '-webkit-text-stroke': `1px var(--${color})`,
      }, 
    ];
  });
};

export const RULES =
  resolveTextStroke([
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
  ]);

import type { Rule } from 'unocss';
import type { TTheme } from './theme';
import { TColorKey } from './colors';

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
    'gray',
    'baby-blue',
    'baby-blue-01',
    'baby-blue-02',
  ]);

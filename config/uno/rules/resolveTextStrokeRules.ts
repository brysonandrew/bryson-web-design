import { TColorKey } from '@app/color/types';
import type { Rule } from 'unocss';

const resolveTextStroke = <T extends object>(
  colors: TColorKey[],
  weight = 1,
): Rule<T>[] => {
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

export const resolveTextStrokeRules = <
  T extends object,
>(): Rule<T>[] =>
  resolveTextStroke<T>(
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

import type { Rule } from 'unocss';

const resolveTextStroke = <T extends object>(
  colors: string[],
  weight = 1,
): Rule<T>[] => {
  return colors.map((color: string) => {
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
      'primary',
      'primary-01',
      'primary-02',
      'primary-04',
      'primary-06',
      'accent',
      'accent-01',
      'accent-02',
    ],
    3,
  );

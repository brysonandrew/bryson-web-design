import { Rule } from 'unocss';

export const resolveOpacityRules = <
  T extends object,
>(): Rule<T>[] => [
  [
    'fade-in',
    {
      'animation-name': 'fade-in',
      'animation-delay': '0ms',
      'animation-duration': '1000ms',
    },
  ],
  [
    'fade-out',
    {
      'animation-name': 'fade-out',
      'animation-delay': '0ms',
      'animation-duration': '1000ms',
    },
  ],
];

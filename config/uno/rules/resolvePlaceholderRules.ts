import { Rule } from 'unocss';

export const resolvePlaceholderRules = <
  T extends object,
>(): Rule<T>[] => [
  ['placeholder', { transform: 'scale(8)' }],
  ['+placeholder', { transform: 'scale(16)' }],
  ['++placeholder', { transform: 'scale(28)' }],
];

import { Rule } from 'unocss';

export const resolveCharGapRules = <
  T extends object,
>(): Rule<T>[] => [
  ['char-gap-0_006725', { 'letter-spacing': '0.00675em' }],
  ['char-gap-0_0125', { 'letter-spacing': '0.0125em' }],
  ['char-gap-0_025', { 'letter-spacing': '0.025em' }],
  ['char-gap-0_0675', { 'letter-spacing': '0.0675em' }],
];

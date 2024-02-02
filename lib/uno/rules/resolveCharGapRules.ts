import { Rule } from 'unocss';

export const resolveCharGapRules = <
  T extends object,
>(): Rule<T>[] => [
  ['char-gap-1', { 'letter-spacing': '0.005em' }],
  ['char-gap-2', { 'letter-spacing': '0.01em' }],
  ['char-gap-3', { 'letter-spacing': '0.02em' }],
  ['char-gap-4', { 'letter-spacing': '0.04em' }],
  ['char-gap-5', { 'letter-spacing': '0.08em' }],
  ['char-gap-6', { 'letter-spacing': '0.1em' }],
  ['char-gap-7', { 'letter-spacing': '0.2em' }],
  ['char-gap-8', { 'letter-spacing': '0.4em' }],
  ['char-gap-9', { 'letter-spacing': '0.8em' }],
];

import { Rule } from 'unocss';
import { resolveOpacityRules } from './resolveOpacityRules';
import { resolveCharGapRules } from './resolveCharGapRules';

export const resolveRules = <
  T extends object
>(): Rule<T>[] => [
  ...resolveCharGapRules<T>(),
  ...resolveOpacityRules<T>(),
];

export * from './resolveCharGapRules';
export * from './resolveOpacityRules';

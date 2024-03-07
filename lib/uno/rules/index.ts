import { Rule } from 'unocss';
import { resolveOpacityRules } from './resolveOpacityRules';
import { resolveCharGapRules } from './resolveCharGapRules';
import { resolvePlaceholderRules } from '@brysonandrew/placeholder';

export const resolveRules = <
  T extends object
>(): Rule<T>[] => [
  ...resolvePlaceholderRules<T>(),
  ...resolveCharGapRules<T>(),
  ...resolveOpacityRules<T>(),
];

export * from './resolveCharGapRules';
export * from './resolveOpacityRules';

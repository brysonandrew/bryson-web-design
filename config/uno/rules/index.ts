import { Rule } from 'unocss';
import { resolveTextStrokeRules } from './resolveTextStrokeRules';
import { resolveMaskRules } from './resolveMaskRules';
import { resolvePlaceholderRules } from '@brysonandrew/placeholder/resolvePlaceholderRules';
import { resolveCharGapRules } from './resolveCharGapRules';

export const resolveRules = <
  T extends object,
>(): Rule<T>[] => [
  ...resolveTextStrokeRules<T>(),
  ...resolvePlaceholderRules<T>(),
  ...resolveMaskRules<T>(),
  ...resolveCharGapRules<T>(),
];

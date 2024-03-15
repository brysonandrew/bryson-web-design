import { Rule } from 'unocss';
import { resolveTextStrokeRules } from './resolveTextStrokeRules';
import { resolveMaskRules } from './resolveMaskRules';
import { resolveRules as resolveCustomRules } from '@brysonandrew/uno-rules';

export const resolveRules = <
  T extends object
>(): Rule<T>[] => [
  ...resolveCustomRules<T>(),
  ...resolveTextStrokeRules<T>(),
  ...resolveMaskRules<T>(),
];

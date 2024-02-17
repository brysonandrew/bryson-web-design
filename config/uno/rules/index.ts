import { Rule } from 'unocss';
import { resolveTextStrokeRules } from './resolveTextStrokeRules';
import { resolveMaskRules } from './resolveMaskRules';

export const resolveRules = <
  T extends object,
>(): Rule<T>[] => [
  ...resolveTextStrokeRules<T>(),
  ...resolveMaskRules<T>(),
];

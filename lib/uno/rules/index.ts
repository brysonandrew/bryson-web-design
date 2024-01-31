import { Rule } from 'unocss';
import { resolveCharGapRules } from './resolveCharGapRules';

export const resolveRules = <
  T extends object,
>(): Rule<T>[] => [...resolveCharGapRules<T>()];

export * from './resolveCharGapRules';

import { Rule } from 'unocss';
import { RULES as TEXT_STROKE } from './text-stroke';
import { RULES as MASK_RULES } from './mask';
import { RULES as PLACEHOLDER_RULES } from './placeholder';

import { TTheme } from '../theme';

export const RULES: Rule<TTheme>[] = [
  ...PLACEHOLDER_RULES,
  ...MASK_RULES,
  ...TEXT_STROKE,
];

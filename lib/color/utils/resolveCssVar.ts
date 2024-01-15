import { TCssVar } from '../types';

export const resolveCssVar = <K extends string>(
  color: K,
): TCssVar => `var(--${color})` as const;

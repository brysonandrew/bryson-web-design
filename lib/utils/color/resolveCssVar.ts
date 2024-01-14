import { TCssVar } from '../../types/color';

export const resolveCssVar = <K extends string>(
  color: K,
): TCssVar => `var(--${color})` as const;

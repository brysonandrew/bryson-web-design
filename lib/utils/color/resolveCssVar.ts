import { TBaseColorKey, TCssVar } from '../../types/color';

export const resolveCssVar = <K extends TBaseColorKey>(
  color: K,
): TCssVar => `var(--${color})` as const;

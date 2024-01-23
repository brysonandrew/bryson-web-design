import { TCssVar } from '@brysonandrew/color/config/types';

export const resolveVarCss = <K extends string>(
  color: K,
): TCssVar<K> => `var(--${color})` as const;

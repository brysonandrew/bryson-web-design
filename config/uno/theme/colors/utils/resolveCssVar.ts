import { TColorKey, TCssVar } from '../types';

export const resolveCssVar = (color: TColorKey): TCssVar =>
  `var(--${color})`;

import { COLORS } from './uno.config-colors';
const resolveShadow = (
  colorKey: keyof typeof COLORS,
  blur: number,
) => `0 0 ${blur}px ${COLORS[colorKey]}`;
export const GLOW_INTERACTIVE_DARK = resolveShadow(
  'teal',
  2,
);
export const GLOW_INTERACTIVE_LIGHT = resolveShadow(
  'black',
  1,
);
export const GLOW_INTERACTIVE_DISABLED = resolveShadow(
  'gray',
  4,
);
export const GLOW_BOX = resolveShadow(
  'baby-blue',
  4,
);

export const GLOW_MARK_DARK = resolveShadow(
  'teal-bright',
  12,
);
export const GLOW_MARK_LIGHT = resolveShadow(
  'black',
  0,
);

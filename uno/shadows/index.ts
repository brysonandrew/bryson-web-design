import { COLORS } from '../colors';

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

export const GLOW_INTERACTIVE_DARK_LG = resolveShadow(
  'teal',
  4,
);

export const GLOW_INTERACTIVE_LIGHT_LG = resolveShadow(
  'black',
  2,
);

export const GLOW_BABY_BLUE = resolveShadow('baby-blue', 4);

export const GLOW_CURSOR_LIGHT = resolveShadow('gray', 4);

export const GLOW_BOX = resolveShadow('teal-bright', 4);

export const GLOW_MARK_DARK = resolveShadow(
  'teal-bright',
  12,
);
export const GLOW_MARK_LIGHT = resolveShadow('black', 0);

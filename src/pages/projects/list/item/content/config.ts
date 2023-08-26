import {
  GLOW_BABY_BLUE,
  GLOW_BLACK,
  GLOW_INTERACTIVE_DARK,
  GLOW_INTERACTIVE_LIGHT,
  GLOW_INTERACTIVE_LIGHT_LG,
} from '@uno/shadows';

export const resolveGlow = (
  isHover: boolean,
  isDarkMode: boolean,
) => ({
  boxShadow: isHover
    ? isDarkMode
      ? GLOW_BABY_BLUE
      : GLOW_INTERACTIVE_LIGHT_LG
    : isDarkMode
    ? GLOW_INTERACTIVE_DARK
    : GLOW_INTERACTIVE_LIGHT,
});

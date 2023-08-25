import {
  GLOW_BABY_BLUE,
  GLOW_BLACK,
  GLOW_INTERACTIVE_DARK,
  GLOW_INTERACTIVE_LIGHT,
} from '@uno/shadows';

export const resolveGlow = (
  isHover: boolean,
  isDarkMode: boolean,
) => ({
  boxShadow: isHover
    ? isDarkMode
      ? GLOW_BABY_BLUE
      : GLOW_BABY_BLUE
    : isDarkMode
    ? GLOW_INTERACTIVE_DARK
    : GLOW_INTERACTIVE_LIGHT,
});

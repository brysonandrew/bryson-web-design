import {
  GLOW_BABY_BLUE_4,
  GLOW_BLACK_1_BABY_BLUE_1,
  GLOW_BLACK_2_BABY_BLUE_4,
  GLOW_TEAL_2,
} from 'config/uno/shadows';

export const resolveGlow = (
  isHover: boolean,
  isDarkMode: boolean,
) => ({
  boxShadow: isHover
    ? isDarkMode
      ? GLOW_BABY_BLUE_4
      : GLOW_BLACK_2_BABY_BLUE_4
    : isDarkMode
    ? GLOW_TEAL_2
    : GLOW_BLACK_1_BABY_BLUE_1,
});

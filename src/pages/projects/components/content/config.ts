import {
  GLOW_BABY_BLUE_4,
  GLOW_TEAL_1_BABY_BLUE_1,
  GLOW_TEAL_2_BABY_BLUE_4,
  GLOW_TEAL_2,
} from '@uno/rules/glow';

export const resolveGlow = (
  isHover: boolean,
  isDarkMode: boolean,
) => ({
  boxShadow: isHover
    ? isDarkMode
      ? GLOW_BABY_BLUE_4
      : GLOW_TEAL_2_BABY_BLUE_4
    : isDarkMode
    ? GLOW_TEAL_2
    : GLOW_TEAL_1_BABY_BLUE_1,
});

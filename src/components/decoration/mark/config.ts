import { THEME_COLORS } from '@lib/constants/color';
import {
  GLOW_TEAL_BRIGHT_12,
  GLOW_BABY_BLUE_1,
} from '@uno/rules/glow';
import { resolveDropShadow } from '@uno/rules/glow/resolveDropShadow';

export const BASE_PROPS = {
  variants: {
    hover: {
      filter: resolveDropShadow(20, 'secondary'),
    },
    dim: {
      filter: resolveDropShadow(2, 'gray'),
    },
    animate: {
      filter: resolveDropShadow(10, 'secondary'),
    },
  },
};

export const resolveColor = (isDarkMode: boolean) => ({
  backgroundColor: isDarkMode
    ? THEME_COLORS['secondary']
    : THEME_COLORS['white-7'],
});
export const resolveHoverColor = (isDarkMode: boolean) => ({
  backgroundColor: isDarkMode
    ? THEME_COLORS['accent']
    : THEME_COLORS['secondary'],
});
export const resolveGlowColor = (isDarkMode: boolean) => ({
  boxShadow: isDarkMode
    ? GLOW_TEAL_BRIGHT_12
    : GLOW_BABY_BLUE_1,
});

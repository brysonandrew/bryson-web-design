import { COLORS } from '@uno/theme/colors';
import { GLOW_TEAL_BRIGHT_12, GLOW_BLACK_4, GLOW_BABY_BLUE_1 } from 'config/uno/shadows';
import { resolveDropShadow } from '@utils/effects/glow';

export const BASE_PROPS = {
  variants: {
    hover: {
      filter: resolveDropShadow(20, 'teal'),
    },
    dim: {
      filter: resolveDropShadow(2, 'gray'),
    },
    animate: {
      filter: resolveDropShadow(10, 'teal'),
    },
  },
};

export const resolveColor = (isDarkMode: boolean) => ({
  backgroundColor: isDarkMode
    ? COLORS['teal']
    : COLORS['gray-3'],
});
export const resolveHoverColor = (isDarkMode: boolean) => ({
  backgroundColor: isDarkMode
    ? COLORS['baby-blue']
    : COLORS['black'],
});
export const resolveGlowColor = (isDarkMode: boolean) => ({
  boxShadow: isDarkMode
  ? GLOW_TEAL_BRIGHT_12
  : GLOW_BABY_BLUE_1,
});
 
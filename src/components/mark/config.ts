import { COLORS } from '@uno/colors';
import { GLOW_MARK_DARK, GLOW_MARK_LIGHT } from '@uno/shadows';
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
  ? GLOW_MARK_DARK
  : GLOW_MARK_LIGHT,
});

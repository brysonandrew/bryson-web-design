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

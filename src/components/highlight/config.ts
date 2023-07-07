import { resolveDropShadow } from "@constants/colors";

export const BASE_PROPS = {
  style: {
    width: 'calc(0.5rem + 4px)',
  },
  variants: {
    hover: {
      filter: resolveDropShadow(20, 'teal'),
    },
    animate: {
      filter: resolveDropShadow(10, 'teal'),
    },
  },
};
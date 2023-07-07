import { resolveDropShadow } from "@constants/colors";

export const BASE_PROPS = {
  variants: {
    hover: {
      filter: resolveDropShadow(20, 'teal'),
    },
    animate: {
      filter: resolveDropShadow(10, 'teal'),
    },
  },
};
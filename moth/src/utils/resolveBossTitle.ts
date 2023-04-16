import { RIVER_HORSE_KEY } from "@moth-components/enemies/river-horse/constants";

export const resolveBossTitle = (key?: string) => {
  switch (key) {
    case RIVER_HORSE_KEY: {
      return "River Horse";
    }
    default: {
      return "unknown";
    }
  }
};

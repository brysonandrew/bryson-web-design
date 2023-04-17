import { LIGHTHOUSE_CAPTAIN_KEY } from "@moth-components/enemies/bosses/lighthouse-captain/constants";
import { RIVER_HORSE_KEY } from "@moth-components/enemies/bosses/river-horse/constants";

export const resolveBossTitle = (key?: string) => {
  switch (key) {
    case RIVER_HORSE_KEY: {
      return "River Horse";
    }
    case LIGHTHOUSE_CAPTAIN_KEY: {
      return "Lighthouse Captain";
    }
    default: {
      return "unknown";
    }
  }
};

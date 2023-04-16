import { LIGHTHOUSE_CAPTAIN_KEY } from "@moth-components/enemies/bosses/lighthouse-captain/constants";
import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import { LighthouseCaptain } from "./LighthouseCaptain";

export const Switch: FC = () => {
  const { currentLevel } = useMothContext();

  switch (currentLevel) {
    case LIGHTHOUSE_CAPTAIN_KEY: {
      return <LighthouseCaptain />;
    }
    default: {
      return null;
    }
  }
};

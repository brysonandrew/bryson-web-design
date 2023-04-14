import { useMothContext } from "@moth-state/Context";
import { usePowerUp } from "../../../sounds/robos/usePowerUp";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const useIntro = () => {
  const drone = usePowerUp();
  const { context } = useMothContext();

  const loop = ({ duration }: TPlayerConfig) => {
    drone.play({
      startTime: context.currentTime,
      pitch: 12,
      duration: duration,
      volume: 0.1,
    });
  };

  return loop;
};

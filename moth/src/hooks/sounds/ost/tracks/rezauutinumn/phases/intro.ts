import { useMothContext } from "@moth-state/Context";
import { usePowerUp } from "../../../robos/usePowerUp";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

const STEPS = [12, 24, 0, 48];
const VOLUME = 0.05;

export const useIntro = () => {
  const drone = usePowerUp();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      drone.play({
        startTime: context.currentTime + index * d + start,
        pitch: v,
        duration: d,
        volume: VOLUME,
        type: "square"
      });
    });
  };

  return loop;
};

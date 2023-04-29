import { useTaser } from "@moth-hooks/sounds/ost/robos/useTaser";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { STEPS } from "./constants";

export const usePhase3 = () => {
  const taser = useTaser();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      const config = {
        startTime: context.currentTime + index * d + start,
        pitch: v + 2,
        duration: d,
        volume: 0.08,
      };
      taser.play(config);
    });
  };

  return loop;
};

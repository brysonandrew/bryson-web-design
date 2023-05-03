import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useTaser } from "@moth-hooks/sounds/ost/robos/useTaser";
import { ARPEGGIO_STEPS } from "./constants";

export const usePhase0 = () => {
  const { context } = useMothContext();

  const arpeggio = useTaser();

  const loop = ({ duration, start }: TPlayerConfig) => {
    ARPEGGIO_STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 36,
        duration: d * 0.9,
      });
    });
  };

  return loop;
};

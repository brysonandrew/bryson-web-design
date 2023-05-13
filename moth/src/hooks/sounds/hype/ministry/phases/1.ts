import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useBass3 } from "@moth-hooks/sounds/ost/basses/useBass3";
import { BASS_STEPS } from "./constants";

export const usePhase1 = () => {
  const { context } = useMothContext();

  const arpeggio = useBass3();

  const loop = ({ duration, start }: TPlayerConfig) => {
    BASS_STEPS.forEach((v, index, { length }) => {
      if (v === null) return;
      const d = duration / length;
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch: v,
        duration: d,
      });
    });
  };

  return loop;
};

import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { VERSE_STEPS } from "./constants";
import { useBass3 } from "@moth-hooks/sounds/ost/basses/useBass3";

export const usePhase1 = () => {
  const { context } = useMothContext();

  const arpeggio = useBass3();

  const loop = ({ duration, start }: TPlayerConfig) => {
    VERSE_STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 36,
        duration: d,
      });
    });
  };

  return loop;
};

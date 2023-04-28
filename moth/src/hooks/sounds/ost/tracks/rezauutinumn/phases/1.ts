import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useSynth2 } from "../../../synths/useSynth2";
import { STEPS_1 } from "../constants";

export const usePhase1 = () => {
  const arpeggio = useSynth2();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS_1.forEach((v, stepsIndex, { length }) => {
      const d = duration / length;

      arpeggio.play({
        startTime:
          context.currentTime + stepsIndex * d + start,
        pitch: v + 39,
        duration: d * 0.4,
        volume: 0.01,
      });
      arpeggio.play({
        startTime:
          context.currentTime + stepsIndex * d + start,
        pitch: v + 39 + 24,
        duration: d * 0.4,
        volume: 0.01,
        type: "triangle",
      });
    });
  };

  return loop;
};

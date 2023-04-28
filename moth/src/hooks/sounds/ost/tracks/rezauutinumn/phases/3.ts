import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useSynth2 } from "../../../synths/useSynth2";
import { STEPS_3 } from "../constants";

export const usePhase3 = () => {
  const arpeggio = useSynth2();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS_3.forEach((v, index, { length }) => {
      const d = duration / length;
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 39,
        duration: d * 0.72,
        volume: 0.02,
      });
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 39 + 24,
        duration: d * 0.72,
        volume: 0.02,
        type: "sine",
      });
    });
  };

  return loop;
};

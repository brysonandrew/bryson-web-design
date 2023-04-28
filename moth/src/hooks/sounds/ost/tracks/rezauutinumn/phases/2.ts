import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useSynth2 } from "../../../synths/useSynth2";
import { SPEED, STEPS_2 } from "../constants";

export const usePhase2 = () => {
  const arpeggio = useSynth2();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS_2.forEach((v, index, { length }) => {
      const d = duration / length;
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 38,
        duration: SPEED * 0.6,
        volume: 0.02,
      });
    });
  };

  return loop;
};

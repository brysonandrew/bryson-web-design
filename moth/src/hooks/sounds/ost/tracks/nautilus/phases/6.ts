import { useMothContext } from "@moth-state/Context";
import { STEPS_6 } from "../constants";
import { useSynth } from "../../../synths/useSynth";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const usePhase6 = () => {
  const arpeggio = useSynth();
  const { context } = useMothContext();

  const loop = ({ start, duration }: TPlayerConfig) => {
    STEPS_6.forEach((v, index, { length }) => {
      if (v === null) return;
      const d = duration / length;

      const isSecond = index % 2 === 0;
      const pitch = isSecond ? v + 24 : v + 36;
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch,
        duration: d * 2,
        volume: 0.02,
        type: isSecond ? "square" : "triangle",
      });
    });
  };

  return loop;
};

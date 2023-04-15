import { useMothContext } from "@moth-state/Context";
import { STEPS_3 } from "../constants";
import { useSynth } from "../../../sounds/synths/useSynth";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const usePhase3 = () => {
  const arpeggio = useSynth();
  const { context } = useMothContext();

  const loop = ({ start, duration }: TPlayerConfig) => {
    STEPS_3.forEach((v, index, { length }) => {
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

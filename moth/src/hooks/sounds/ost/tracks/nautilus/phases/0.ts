import { useMothContext } from "@moth-state/Context";
import { ARPEGGIO_STEPS_0 } from "../constants";
import { useSynth } from "../../../synths/useSynth";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const usePhase0 = () => {
  const arpeggio = useSynth();
  const { context } = useMothContext();

  const loop = ({ start, duration }: TPlayerConfig) => {
    ARPEGGIO_STEPS_0.forEach((v, index, { length }) => {
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

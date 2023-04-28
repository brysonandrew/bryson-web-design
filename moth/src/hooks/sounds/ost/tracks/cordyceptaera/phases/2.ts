import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useSynth3 } from "../../../synths/useSynth3";
import { ARPEGGIO_EACH_FIRST_INCLUDING_LAST_8_STEPS, ARPEGGIO_VOLUME } from "../constants";

export const usePhase2 = () => {
  const arpeggio = useSynth3();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    ARPEGGIO_EACH_FIRST_INCLUDING_LAST_8_STEPS.forEach(
      (v, index, { length }) => {
        if (!v) return;
        const d = duration / length;
        arpeggio.play({
          startTime:
            context.currentTime + index * d + start,
          pitch: v + 1 + 12 * 4,
          duration: d,
          type: "triangle",
          volume: ARPEGGIO_VOLUME,
        });
      },
    );
  };

  return loop;
};

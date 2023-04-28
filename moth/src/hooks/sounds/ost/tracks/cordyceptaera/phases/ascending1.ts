import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useSynth3 } from "../../../synths/useSynth3";
import {
  ARPEGGIO_ASCENDING_STEPS_1,
  ARPEGGIO_VOLUME,
} from "../constants";

const VOLUME = ARPEGGIO_VOLUME * 0.1;

export const useAscending1 = () => {
  const arpeggio = useSynth3();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    ARPEGGIO_ASCENDING_STEPS_1.forEach(
      (v, index, { length }) => {
        if (!v) return;
        const d = duration / length;
        arpeggio.play({
          startTime:
            context.currentTime + index * d + start,
          pitch: v + 1 + 12 * 4,
          duration: d,
          type: "triangle",
          volume: VOLUME,
        });
      },
    );
  };

  return loop;
};

import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useSynth3 } from "../../../synths/useSynth3";
import {
  ARPEGGIO_5TH_STEPS,
  VERSE_1,
  VERSE_VOLUME,
} from "../constants";

export const usePhase6 = () => {
  const arpeggio = useSynth3();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    VERSE_1.forEach((v, index, { length }) => {
      if (v === null) return;
      const d = duration / length;
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 12 * 4,
        duration: d,
        type: "square",
        volume: VERSE_VOLUME,
      });
    });
  };

  return loop;
};

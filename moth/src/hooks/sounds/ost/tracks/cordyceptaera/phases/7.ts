import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useSynth3 } from "../../../synths/useSynth3";
import { ARPEGGIO_STEPS } from "../constants";
import { useSynth } from "@moth-hooks/sounds/ost/synths/useSynth";

export const usePhase7 = () => {
  const arpeggio = useSynth();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    ARPEGGIO_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 1 + 12 ,
        duration: d,
        type: "sawtooth",
        volume: 0.04,
      });
    });
  };

  return loop;
};

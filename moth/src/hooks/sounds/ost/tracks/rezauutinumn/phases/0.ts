import { useCymbal } from "@moth-hooks/sounds/ost/sounds/drums/useCymbal";
import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";
import { useSnare } from "@moth-hooks/sounds/ost/sounds/drums/useSnare";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useSynth2 } from "../../../sounds/synths/useSynth2";
import { STEPS_0 } from "../constants";

export const usePhase0 = () => {
  const arpeggio = useSynth2();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS_0.forEach((v, stepsIndex, { length }) => {
      const d = duration / length;
      arpeggio.play({
        startTime:
          context.currentTime + stepsIndex * d + start,
        pitch: v + 38,
        duration: d * 0.28,
        volume: 0.02,
      });
    });
  };

  return loop;
};

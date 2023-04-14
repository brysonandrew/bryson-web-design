import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_STEPS,
  KICK_STEPS,
  SNARE_STEPS,
  STEPS_0,
} from "../constants";
import { useSynth2 } from "../../../sounds/synths/useSynth2";
import { useCymbal } from "@moth-hooks/sounds/ost/sounds/drums/useCymbal";
import { useSnare } from "@moth-hooks/sounds/ost/sounds/drums/useSnare";
import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

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
    CYMBAL_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      cymbal({
        startTime: context.currentTime + index * d + start,
        volume: 0.1,
      });
    });
    SNARE_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      snare({
        startTime: context.currentTime + index * d + start,
        volume: 0.1,
      });
    });
    KICK_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      kick({
        startTime: context.currentTime + index * d + start,
        volume: 0.1,
      });
    });
  };

  return loop;
};

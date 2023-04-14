import { useMothContext } from "@moth-state/Context";
import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";
import { useSnare } from "@moth-hooks/sounds/ost/sounds/drums/useSnare";
import { useCymbal } from "@moth-hooks/sounds/ost/sounds/drums/useCymbal";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import {
  CYMBAL_STEPS,
  KICK_STEPS,
  SNARE_STEPS,
  STEPS_2,
  SPEED,
} from "../constants";
import { useSynth2 } from "../../../sounds/synths/useSynth2";

export const usePhase2 = () => {
  const arpeggio = useSynth2();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

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

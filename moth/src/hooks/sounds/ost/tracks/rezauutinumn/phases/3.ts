import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_STEPS,
  KICK_STEPS,
  SNARE_STEPS_3,
  STEPS_3,
} from "../constants";
import { useSynth2 } from "../../../sounds/synths/useSynth2";
import { useCymbal } from "@moth-hooks/sounds/ost/sounds/drums/useCymbal";
import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";
import { useSnare } from "@moth-hooks/sounds/ost/sounds/drums/useSnare";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const usePhase3 = () => {
  const arpeggio = useSynth2();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS_3.forEach((v, index, { length }) => {
      const d = duration / length;
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 39,
        duration: d * 0.72,
        volume: 0.02,
      });
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 39 + 24,
        duration: d * 0.72,
        volume: 0.02,
        type: "sine",
      });
    });

    CYMBAL_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      cymbal({
        startTime: context.currentTime + index * d + start,
        volume: 0.2,
      });
    });
    SNARE_STEPS_3.forEach((v, index, { length }) => {
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
        volume: 0.2,
      });
    });
  };

  return loop;
};

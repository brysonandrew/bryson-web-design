import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_STEPS_1,
  KICK_STEPS_1,
  SNARE_STEPS,
  STEPS_1,
} from "../constants";
import { useSynth2 } from "../../../sounds/synths/useSynth2";
import { useCymbal } from "@moth-hooks/sounds/ost/sounds/drums/useCymbal";
import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";
import { useSnare } from "@moth-hooks/sounds/ost/sounds/drums/useSnare";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const usePhase1 = () => {
  const arpeggio = useSynth2();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS_1.forEach((v, stepsIndex, { length }) => {
      const d = duration / length;

      arpeggio.play({
        startTime:
          context.currentTime + stepsIndex * d + start,
        pitch: v + 39,
        duration: d * 0.4,
        volume: 0.01,
      });
      arpeggio.play({
        startTime:
          context.currentTime + stepsIndex * d + start,
        pitch: v + 39 + 24,
        duration: d * 0.4,
        volume: 0.01,
        type: "triangle",
      });
    });

    CYMBAL_STEPS_1.forEach((v, index, { length }) => {
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
    KICK_STEPS_1.forEach((v, index, { length }) => {
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

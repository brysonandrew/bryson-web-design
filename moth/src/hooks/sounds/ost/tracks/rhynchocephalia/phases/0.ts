import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_STEPS,
  KICK_STEPS,
  SNARE_STEPS,
  SPEED,
  STEPS,
} from "../constants";
import { useBass1 } from "@moth-hooks/sounds/ost/sounds/basses/useBass1";
import { useCymbal } from "@moth-hooks/sounds/ost/sounds/drums/useCymbal";
import { useSnare } from "@moth-hooks/sounds/ost/sounds/drums/useSnare";
import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const usePhase0 = () => {
  const bass = useBass1();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;

      bass.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 36,
        duration: SPEED,
        volume: 0.028,
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
    SNARE_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      snare({
        startTime: context.currentTime + index * d + start,
        volume: 0.2,
        version: 2,
        type: "highpass",
      });
    });
    KICK_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      kick({
        startTime: context.currentTime + index * d + start,
        volume: 0.4,
      });
    });
  };

  return loop;
};

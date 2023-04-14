import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_SPEED,
  CYMBAL_STEPS,
  KICK_SPEED,
  KICK_STEPS,
  SNARE_SPEED,
  SNARE_STEPS,
  SPEED,
  STEPS,
} from "../constants";
import { useBass1 } from "@moth-hooks/sounds/ost/sounds/basses/useBass1";
import { useCymbal } from "@moth-hooks/sounds/ost/sounds/drums/useCymbal";
import { useSnare } from "@moth-hooks/sounds/ost/sounds/drums/useSnare";
import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";

export const usePhase0 = () => {
  const bass = useBass1();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = () => {
    STEPS.forEach((v, index) => {
      bass.play({
        startTime: context.currentTime + index * SPEED,
        pitch: v + 36,
        duration: SPEED,
        volume: 0.028,
      });
    });
    CYMBAL_STEPS.forEach((v, index) => {
      if (!v) return;
      cymbal({
        startTime:
          context.currentTime + index * CYMBAL_SPEED,
        volume: 0.2,
      });
    });
    SNARE_STEPS.forEach((v, index) => {
      if (!v) return;
      snare({
        startTime:
          context.currentTime + index * SNARE_SPEED,
        volume: 0.2,
        version: 2,
        type: "highpass",
      });
    });
    KICK_STEPS.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
        volume: 0.4,
      });
    });
  };

  return loop;
};

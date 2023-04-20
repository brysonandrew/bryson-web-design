import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";
import { useSnare } from "@moth-hooks/sounds/ost/sounds/drums/useSnare";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_STEPS,
  KICK_STEPS,
  SNARE_STEPS,
} from "./constants";
import { useCymbal } from "@moth-hooks/sounds/ost/sounds/drums/useCymbal";

export const useDrums = () => {
  const { context } = useMothContext();
  const snare = useSnare();
  const kick = useKick();
  const cymbal = useCymbal();

  const loop = ({ duration, start }: TPlayerConfig) => {
    SNARE_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      const startTime =
        context.currentTime + index * d + start;
      snare.play({
        startTime,
        volume: 0.28,
      });
    });
    KICK_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      const startTime =
        context.currentTime + index * d + start;
      kick.play({
        startTime,
      });
    });
    CYMBAL_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      const startTime =
        context.currentTime + index * d + start;
      cymbal.play({
        startTime,
        volume: 0.28,
      });
    });
  };

  return loop;
};

import { useMothContext } from "@moth-state/Context";
import { useCymbal } from "@moth-hooks/sounds/ost/drums/useCymbal";
import { useKick } from "@moth-hooks/sounds/ost/drums/useKick";
import { useSnare } from "@moth-hooks/sounds/ost/drums/useSnare";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import {
  CYMBAL_STEPS_1,
  KICK_STEPS_1,
  SNARE_STEPS,
} from "../constants";

export const useDrums = () => {
  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    CYMBAL_STEPS_1.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      cymbal.play({
        startTime: context.currentTime + index * d + start,
        volume: 0.1,
      });
    });
    SNARE_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      snare.play({
        startTime: context.currentTime + index * d + start,
        volume: 0.1,
      });
    });
    KICK_STEPS_1.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      kick.play({
        startTime: context.currentTime + index * d + start,
        volume: 0.1,
      });
    });
  };

  return loop;
};

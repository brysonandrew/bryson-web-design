import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_STEPS,
  KICK_STEPS,
  SNARE_STEPS,
} from "../constants";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useSnare } from "@moth-hooks/sounds/ost/drums/useSnare";
import { useKick } from "@moth-hooks/sounds/ost/drums/useKick";
import { useCymbal } from "@moth-hooks/sounds/ost/drums/useCymbal";

export const useDrums = () => {
  const snare = useSnare();
  const kick = useKick();
  const cymbal = useCymbal();

  const { context } = useMothContext();

  const loop = ({ start, duration }: TPlayerConfig) => {
    console.log(start, duration);
    CYMBAL_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      cymbal.play({
        startTime: context.currentTime + index * d + start,
        volume: 0.12,
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
    KICK_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      kick.play({
        startTime: context.currentTime + index * d + start,
        volume: 0.15,
      });
    });
  };

  return loop;
};

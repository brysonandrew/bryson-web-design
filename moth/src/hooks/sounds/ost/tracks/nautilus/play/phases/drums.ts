import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_STEPS,
  KICK_STEPS,
  SNARE_STEPS,
} from "../../constants";
import { useCymbal } from "../../sounds/useCymbal";
import { useKick } from "../../sounds/useKick";
import { useSnare } from "../../sounds/useSnare";
import { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const useDrums = () => {
  const snare = useSnare();
  const kick = useKick();
  const cymbal = useCymbal();

  const { context } = useMothContext();

  const loop = ({ start, duration }: TPlayerConfig) => {
    console.log(start, duration);
    CYMBAL_STEPS.forEach((v, index, {length}) => {
      if (!v) return;
      const d = duration / length;
      cymbal({
        startTime: context.currentTime + index * d + start,
        volume: 0.12,
      });
    });
    SNARE_STEPS.forEach((v, index, {length}) => {
      if (!v) return;
      const d = duration / length;
      snare({
        startTime: context.currentTime + index * d + start,
        volume: 0.1,
      });
    });
    KICK_STEPS.forEach((v, index, {length}) => {
      if (!v) return;
      const d = duration / length;
      kick({
        startTime: context.currentTime + index * d + start,
        volume: 0.15,
      });
    });
  };

  return loop;
};

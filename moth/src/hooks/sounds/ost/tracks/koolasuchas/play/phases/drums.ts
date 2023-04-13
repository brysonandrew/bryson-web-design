import { useMothContext } from "@moth-state/Context";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useCymbal } from "../../../../sounds/drums/useCymbal";
import { useKick } from "../../../../sounds/drums/useKick";
import { useSnare } from "../../../../sounds/drums/useSnare";
import {
  CYMBAL_STEPS,
  KICK_STEPS,
  SNARE_STEPS,
} from "../constants";

export const useDrums = () => {
  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    KICK_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      kick({
        startTime: context.currentTime + index * d + start,
        volume: 0.4,
      });
    });
    CYMBAL_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      cymbal({
        startTime: context.currentTime + index * d + start,
        volume: 0.28,
      });
    });
    SNARE_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      snare({
        startTime: context.currentTime + index * d + start,
        volume: 0.28,
        version: 2,
      });
    });
  };

  return loop;
};

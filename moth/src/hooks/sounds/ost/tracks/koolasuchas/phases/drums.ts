import { useMothContext } from "@moth-state/Context";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useCymbal } from "../../../drums/useCymbal";
import { useKick } from "../../../drums/useKick";
import { useSnare } from "../../../drums/useSnare";
import {
  CYMBAL_STEPS,
  KICK_STEPS,
  SNARE_STEPS,
} from "../constants";

const VOLUME = 0.28;
const CYMBAL_VOLUME = VOLUME * 0.7;
const SNARE_VOLUME = VOLUME * 0.5;

export const useDrums = () => {
  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    KICK_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      kick.play({
        startTime: context.currentTime + index * d + start,
        volume: VOLUME,
      });
    });
    CYMBAL_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      cymbal.play({
        startTime: context.currentTime + index * d + start,
        volume: CYMBAL_VOLUME,
      });
    });
    SNARE_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      snare.play({
        startTime: context.currentTime + index * d + start,
        volume: SNARE_VOLUME,
        version: 2,
      });
    });
  };

  return loop;
};

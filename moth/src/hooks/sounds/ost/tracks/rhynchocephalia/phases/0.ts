import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_STEPS,
  KICK_STEPS,
  SNARE_STEPS,
  SPEED,
  STEPS,
} from "../constants";
import { useBass1 } from "@moth-hooks/sounds/ost/basses/useBass1";
import { useCymbal } from "@moth-hooks/sounds/ost/drums/useCymbal";
import { useSnare } from "@moth-hooks/sounds/ost/drums/useSnare";
import { useKick } from "@moth-hooks/sounds/ost/drums/useKick";
import type {
  TPlayer,
  TPlayerConfig,
} from "@moth-hooks/sounds/ost/types";

export const usePhase0 = () => {
  const { context } = useMothContext();
  const bass = useBass1();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const play: TPlayer = ({
    duration,
    start,
  }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      const startTime =
        context.currentTime + index * d + start;
      bass.play({
        startTime,
        pitch: v + 36,
        duration: SPEED,
        volume: 0.028,
      });
    });
    CYMBAL_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      const startTime =
        context.currentTime + index * d + start;
      cymbal.play({
        startTime,
        volume: 0.2,
      });
    });
    SNARE_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      const startTime =
        context.currentTime + index * d + start;
      snare.play({
        startTime,
        volume: 0.2,
        version: 2,
        type: "highpass",
      });
    });
    KICK_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      const startTime =
        context.currentTime + index * d + start;
      kick.play({
        startTime,
        volume: 0.4,
      });
    });
  };

  return play;
};

import { useBass1 } from "@moth-hooks/sounds/ost/sounds/basses/useBass1";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { CLANG_STEPS, SPEED } from "../constants";
import { useClang } from "@moth-hooks/sounds/ost/sounds/robos/useClang";
import { useMech } from "@moth-hooks/sounds/ost/sounds/robos/useMech";

export const usePhase2 = () => {
  const bass = useMech();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    CLANG_STEPS.forEach((v, index, { length }) => {
      if (v === null) return;
      const d = duration / length;
      bass.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 36,
        duration: d,
        volume: 0.1,
      });
    });
  };

  return loop;
};

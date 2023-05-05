import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { VERSE_STEPS } from "./constants";
import { useTundra } from "@moth-hooks/sounds/ost/wails/useTundra";

export const usePhase0 = () => {
  const { context } = useMothContext();

  const sound = useTundra();

  const loop = ({ duration, start }: TPlayerConfig) => {
    VERSE_STEPS.forEach((v, index, { length }) => {
      if (v === null) return;
      const d = duration / length;
      sound.play({
        startTime: context.currentTime + index * d + start,
        pitch: v,
        duration: d * 0.9,
      });
    });
  };

  return loop;
};

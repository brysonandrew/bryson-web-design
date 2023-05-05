import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { INTRO_STEPS } from "./constants";
import { useTundra } from "@moth-hooks/sounds/ost/wails/useTundra";

export const useIntro = () => {
  const { context } = useMothContext();

  const sound = useTundra();

  const loop = ({ duration, start }: TPlayerConfig) => {
    INTRO_STEPS.forEach((v, index, { length }) => {
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

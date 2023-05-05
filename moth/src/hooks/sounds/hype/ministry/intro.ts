import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { INTRO_STEPS } from "./phases/constants";
import { useGuitar } from "@moth-hooks/sounds/ost/guitars/useGuitar";

export const useIntro = () => {
  const { context } = useMothContext();

  const sound = useGuitar();

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

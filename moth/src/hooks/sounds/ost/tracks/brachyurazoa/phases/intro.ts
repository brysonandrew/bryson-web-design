import { useMothContext } from "@moth-state/Context";
import { useGlitch } from "../../../robos/useGlitch";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const useIntro = () => {
  const glitch = useGlitch();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    glitch.play({
      startTime: context.currentTime + start,
      pitch: 28,
      duration: duration,
      volume: 0.28,
      type: "square",
    });
  };

  return loop;
};

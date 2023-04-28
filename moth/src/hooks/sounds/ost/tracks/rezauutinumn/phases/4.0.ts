import { useGlitch } from "@moth-hooks/sounds/ost/robos/useGlitch";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase40 = () => {
  const glitch = useGlitch();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    glitch.play({
      startTime: context.currentTime + start,
      pitch: 0,
      duration: duration,
      volume: 0.4,
      type: "square",
    });
  };

  return loop;
};

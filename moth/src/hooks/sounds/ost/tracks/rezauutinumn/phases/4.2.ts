import { useGlitch } from "@moth-hooks/sounds/ost/sounds/robos/useGlitch";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase42 = () => {
  const glitch = useGlitch();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    glitch.play({
      startTime: context.currentTime + start,
      pitch: 48,
      duration: duration,
      volume: 0.28,
      type: "square",
    });
  };

  return loop;
};

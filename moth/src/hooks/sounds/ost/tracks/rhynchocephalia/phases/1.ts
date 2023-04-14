import { usePowerUp } from "@moth-hooks/sounds/ost/sounds/robos/usePowerUp";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase1 = () => {
  const glitch = usePowerUp();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    const d = duration / 2;
    glitch.play({
      startTime: context.currentTime + start + d,
      pitch: 12 + 1,
      duration: d,
      volume: 0.08,
      type: "square",
    });
  };

  return loop;
};

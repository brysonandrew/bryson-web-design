import { useTundra } from "@moth-hooks/sounds/ost/wails/useTundra";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase2 = () => {
  const { context } = useMothContext();
  const tundra = useTundra();

  const play = ({ duration, start }: TPlayerConfig) => {
    const pitch = 65;
    tundra.play({
      startTime: context.currentTime + start,
      duration,
      volume: 0.1,
      pitch,
      glitch: 0.1,
    });
  };

  return play;
};

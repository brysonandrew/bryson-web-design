import { useTundra } from "@moth-hooks/sounds/ost/wails/useTundra";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase4 = () => {
  const { context } = useMothContext();
  const tundra = useTundra();

  const play = ({ duration, start }: TPlayerConfig) => {
    const pitch = -64;
    tundra.play({
      startTime: context.currentTime + start,
      duration,
      volume: 0.7,
      pitch,
      glitch: 0.5,
      type: "sawtooth",
    });
  };

  return play;
};

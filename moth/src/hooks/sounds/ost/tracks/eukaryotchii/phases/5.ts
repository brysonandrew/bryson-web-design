import { usePunisher } from "@moth-hooks/sounds/ost/termini/usePunisher";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase5 = () => {
  const { context } = useMothContext();
  const tundra = usePunisher();

  const play = ({ duration, start }: TPlayerConfig) => {
    const pitch = 37;
    tundra.play({
      startTime: context.currentTime + start,
      pitch,
      duration: duration,
      volume: 0.2,
    });
  };

  return play;
};

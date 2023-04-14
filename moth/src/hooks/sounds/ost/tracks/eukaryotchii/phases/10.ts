import { useAtaxia } from "@moth-hooks/sounds/ost/sounds/termini/useAtaxia";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase10 = () => {
  const { context } = useMothContext();
  const tundra = useAtaxia();

  const play = ({ duration, start }: TPlayerConfig) => {
    const pitch = 72 + 24;
    tundra.play({
      startTime: context.currentTime + start,
      pitch,
      duration: duration * 24,
      volume: 0.00005,
    });
  };
  return play;
};

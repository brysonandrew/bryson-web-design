import { useAtaxia } from "@moth-hooks/sounds/ost/sounds/termini/useAtaxia";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase9 = () => {
  const { context } = useMothContext();
  const tundra = useAtaxia();

  const play = ({ duration, start }: TPlayerConfig) => {
    const pitch = 72;
    tundra.play({
      startTime: context.currentTime + start,
      pitch,
      duration: duration * 24,
      volume: 0.00025,
    });
  };
  return play;
};

import { useDistruptor } from "@moth-hooks/sounds/ost/sounds/termini/useDistruptor";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase3 = () => {
  const disruptor = useDistruptor();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    const d = duration / 2;
    disruptor.play({
      startTime: context.currentTime + start,
      pitch: 12 + 1,
      duration: d,
      volume: 0.08,
      type: "square",
    });
  };

  return loop; 
};

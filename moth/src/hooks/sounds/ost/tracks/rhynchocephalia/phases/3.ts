import { useAtaxia } from "@moth-hooks/sounds/ost/sounds/termini/useAtaxia";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

const STEPS = [36, 48, 64, 72];

export const usePhase3 = () => {
  const ataxia = useAtaxia();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      ataxia.play({
        startTime: context.currentTime + index * d + start,
        pitch: v,
        duration: d * 24,
        volume: 1,
      });
    });
  };

  return loop;
};

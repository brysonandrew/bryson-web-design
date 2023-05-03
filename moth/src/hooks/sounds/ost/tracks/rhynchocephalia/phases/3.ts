import { useAtaxia } from "@moth-hooks/sounds/ost/termini/useAtaxia";
import type {
  TPlayer,
  TPlayerConfig,
} from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

const STEPS = [73];

export const usePhase3 = () => {
  const ataxia = useAtaxia();
  const { context } = useMothContext();

  const loop: TPlayer = ({
    duration,
    start,
  }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      ataxia.play({
        startTime:
          context.currentTime +
          index * d +
          start +
          duration * 0.5,
        pitch: v,
        duration: d * 24,
        volume: 0.000005,
      });
    });
  };

  return loop;
};

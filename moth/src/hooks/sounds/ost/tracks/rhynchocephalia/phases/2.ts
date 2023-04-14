import { interpolateScale } from "@moth-hooks/sounds/constants/scales";
import { useDistruptor } from "@moth-hooks/sounds/ost/sounds/termini/useDistruptor";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

const STEPS = [
  -12, 24, 12, 0, 1, 2, 3, 4,
  //...[...Array(24)].fill(24),
];

export const usePhase2 = () => {
  const disruptor = useDistruptor();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      disruptor.play({
        startTime: context.currentTime + index * d + start,
        pitch:
          interpolateScale({ index, key: "aeolian" }) +
          v +
          1, // + 24
        // -
        // 24
        duration: d,
        volume: 0.1,
        type: "square",
      });
    });
  };

  return loop;
};

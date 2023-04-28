import { interpolateScale } from "@moth-hooks/sounds/constants/scales";
import { usePunisher } from "@moth-hooks/sounds/ost/termini/usePunisher";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

const STEPS = [
  -12,
  24,
  12,
  0,
  1,
  2,
  3,
  4,
  //...[...Array(24)].fill(4),
];

export const usePhase1 = () => {
  const disruptor = usePunisher();

  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      disruptor.play({
        startTime: context.currentTime + index * d + start,
        pitch:
          interpolateScale({ index, key: "aeolian" }) +
          v +
          1 - 24,
        duration: d,
        volume: 0.08,
        type: "square",
      });
    });
  };

  return loop;
};

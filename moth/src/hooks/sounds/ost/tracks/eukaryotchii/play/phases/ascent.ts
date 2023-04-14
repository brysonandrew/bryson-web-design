import { interpolateScale } from "@moth-hooks/sounds/constants/scales";
import { useClang } from "@moth-hooks/sounds/ost/sounds/robos/useClang";
import type { TMechHandlerConfig } from "@moth-hooks/sounds/ost/sounds/robos/useMech";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

const COUNT = 4;

export const usePhaseAscent = () => {
  const clang = useClang();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    [...Array(COUNT)].forEach((_, index, { length }) => {
      const d = duration / length;
      const pitch =
        interpolateScale({ index, key: "dorian" }) + 12;
      const config: TMechHandlerConfig = {
        startTime: context.currentTime + index * d + start,
        pitch,
        duration: d * 0.5,
        volume: 0.2,
        torque: 1200,
        revs: 2400 / pitch,
      };
      clang.play(config);
    });
  };

  return loop;
};

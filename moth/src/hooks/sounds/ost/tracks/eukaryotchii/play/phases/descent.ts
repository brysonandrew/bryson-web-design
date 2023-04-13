import { SCALE_RECORD } from "@moth-hooks/sounds/constants/scales";
import { useClang } from "@moth-hooks/sounds/ost/sounds/robo/useClang";
import type { TMechHandlerConfig } from "@moth-hooks/sounds/ost/sounds/robo/useMech";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

const COUNT = 4;

export const usePhaseDescent = () => {
  const clang = useClang();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    [...Array(COUNT)].forEach((_, index, { length }) => {
      const pitch =
        SCALE_RECORD.aeolian[
          index % SCALE_RECORD.aeolian.length
        ] + 12;
      const d = duration / length;
      const config: TMechHandlerConfig = {
        startTime: context.currentTime + index * d + start,
        pitch,
        duration: d * 2,
        volume: 0.05,
        torque: 1200,
        revs: 2400 / pitch,
      };
      clang.play(config);
    });
  };

  return loop;
};

import {
  SCALE_RECORD,
  interpolateScale,
} from "@moth-hooks/sounds/constants/scales";
import { useClang } from "@moth-hooks/sounds/ost/robos/useClang";
import {
  useMech,
  type TMechHandlerConfig,
} from "@moth-hooks/sounds/ost/robos/useMech";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

const COUNT = 8;

export const usePhaseDescent = () => {
  const clang = useMech();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    [...Array(COUNT)].forEach((_, index, { length }) => {
      const pitch =
        interpolateScale({
          index: length - index,
          key: "lydian",
        }) +
        24 +
        1;
      const d = duration / length;
      const config: TMechHandlerConfig = {
        startTime: context.currentTime + index * d + start,
        pitch,
        duration: d * 0.2,
        volume: 0.12,
        torque: 1200,
        revs: 2400 / pitch,
      };
      clang.play(config);
      // clang.play({ ...config, pitch: 12 });
    });
  };

  return loop;
};

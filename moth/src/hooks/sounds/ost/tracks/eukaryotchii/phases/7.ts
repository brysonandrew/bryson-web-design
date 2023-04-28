import { useClang } from "@moth-hooks/sounds/ost/robos/useClang";
import type { TMechHandlerConfig } from "@moth-hooks/sounds/ost/robos/useMech";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { STEPS_1, STEPS_2 } from "../constants";

export const usePhase7 = () => {
  const clang = useClang();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS_2.forEach((v, index, { length }) => {
      const d = duration / length;
      const pitch = v;
      const config: TMechHandlerConfig = {
        startTime: context.currentTime + index * d + start,
        pitch,
        duration: d * 1.1,
        volume: 0.02,
        torque: 1200,
        revs: 2400 / pitch,
      };
      clang.play(config);
    });
  };

  return loop;
};

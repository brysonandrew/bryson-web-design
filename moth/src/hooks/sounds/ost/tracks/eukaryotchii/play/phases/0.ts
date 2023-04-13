import { useClang } from "@moth-hooks/sounds/ost/sounds/robo/useClang";
import type { TMechHandlerConfig } from "@moth-hooks/sounds/ost/sounds/robo/useMech";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { ARPEGGIO_STEPS } from "../constants";

export const usePhase0 = () => {
  const clang = useClang();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    ARPEGGIO_STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      const pitch = v;
      const config: TMechHandlerConfig = {
        startTime: context.currentTime + index * d + start,
        pitch,
        duration: d * 1.4,
        volume: 0.05,
        torque: 1200,
        revs: 2400 / pitch,
      };
      clang.play(config);
    });
  };

  return loop;
};

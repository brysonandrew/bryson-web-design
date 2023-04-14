import { useClang } from "@moth-hooks/sounds/ost/sounds/robos/useClang";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { ARPEGGIO_STEPS, TIME } from "../constants";

export const usePhase1 = () => {
  const clang = useClang();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    ARPEGGIO_STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      const inc = ~~(index / TIME) * 12;
      const config = {
        startTime: context.currentTime + index * d + start,
        pitch: v + 24,
        torque: v + inc * 1000,
        duration: d * 1,
        volume: 0.2,
      };
      clang.play(config);
    });
  };

  return loop;
};

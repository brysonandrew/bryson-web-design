import type { TMechHandlerConfig } from "@moth-hooks/sounds/ost/robos/useMech";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { STEPS } from "../3/constants";
import { usePunisher } from "@moth-hooks/sounds/ost/termini/usePunisher";

export const useBass0 = () => {
  const sound = usePunisher();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      const pitch = v;
      const config: TMechHandlerConfig = {
        startTime: context.currentTime + index * d + start,
        pitch,
        duration: d * 1.1,
        volume: 0.04,
        type: "sawtooth"
      };
      sound.play(config);
    });
  };

  return loop;
};

import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../../types";
import { STEPS } from "../3/constants";
import { useDistruptor } from "@moth-hooks/sounds/ost/termini/useDistruptor";

export const useBass0 = () => {
  const sound = useDistruptor();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      const pitch = v;
      const config: THandlerConfig = {
        startTime: context.currentTime + index * d + start,
        pitch,
        duration: d * 1.1,
        volume: 1,
        type: "sine",
      };
      sound.play(config);
    });
  };

  return loop;
};

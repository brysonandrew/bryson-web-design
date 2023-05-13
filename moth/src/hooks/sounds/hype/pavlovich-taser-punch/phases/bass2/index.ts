import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../../types";
import { STEPS } from "../3/constants";
import { usePunisher } from "@moth-hooks/sounds/ost/termini/usePunisher";

const VOLUME = 2;

export const useBass2 = () => {
  const sound = usePunisher();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      const pitch = v;
      const config: THandlerConfig = {
        startTime: context.currentTime + index * d + start,
        pitch,
        duration: d * 1.1,
        volume: VOLUME,
        type: "sine",
      };
      sound.play(config);
    });
  };

  return loop;
};

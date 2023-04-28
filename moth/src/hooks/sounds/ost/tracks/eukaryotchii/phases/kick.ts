import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useKick as _useKick } from "../../../drums/useKick";
import { KICK_STEPS } from "../constants";

const VOLUME = 0.24;

export const useKick = () => {
  const kick = _useKick();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    KICK_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      kick.play({
        startTime: context.currentTime + index * d + start,
        volume: VOLUME,
      });
    });
  };

  return loop;
};

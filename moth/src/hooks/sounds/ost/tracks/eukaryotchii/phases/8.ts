import { usePunisher } from "@moth-hooks/sounds/ost/termini/usePunisher";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { PUNISHER_STEPS } from "../constants";

export const usePhase8 = () => {
  const { context } = useMothContext();
  const tundra = usePunisher();

  const play = ({ duration, start }: TPlayerConfig) => {
    PUNISHER_STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      const pitch = v;
      tundra.play({
        startTime: context.currentTime + d * index + start,
        pitch,
        duration: duration,
        volume: 0.04,
      });
    });
  };
  return play;
};

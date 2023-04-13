import { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { BASS_STEPS } from "../constants";
import { useBass } from "../../../../sounds/basses/useBass";

export const usePhase0 = () => {
  const { context } = useMothContext();
  const bass = useBass();

  const play = ({ duration, start }: TPlayerConfig) => {
    BASS_STEPS.forEach((v, index, { length }) => {
      const d = duration / length;
      const pitch = v;
      bass.play({
        startTime: context.currentTime + index * d + start,
        duration: d,
        volume: 0.1,
        pitch,
      });
    });
  };

  return play;
};

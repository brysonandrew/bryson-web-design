import { useMothContext } from "@moth-state/Context";
import { useBass } from "../../sounds/useBass";
import {
  BASS_COUNT,
  BASS_SPEED,
  BASS_STEPS,
  SPEED,
} from "../../constants";

export const usePhase0 = () => {
  const { context } = useMothContext();

  const bass = useBass();

  const play = () => {
    BASS_STEPS.forEach((v, index) => {
      bass.play({
        startTime: context.currentTime + index,
        duration: BASS_SPEED * BASS_COUNT,
      });
    });
  };

  return play;
};

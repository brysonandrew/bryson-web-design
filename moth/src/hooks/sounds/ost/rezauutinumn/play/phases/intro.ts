import { useMothContext } from "@moth-state/Context";
import { useBass } from "../../sounds/useBass";
import { STEPS_SPEED } from "../constants";

export const useIntro = () => {
  const bass = useBass();

  const { context } = useMothContext();

  const loop = () => {
    bass.play({
      startTime: context.currentTime,
      pitch: 24,
      duration: STEPS_SPEED * 10,
      volume: 0.1,
    });
  };

  return loop;
};

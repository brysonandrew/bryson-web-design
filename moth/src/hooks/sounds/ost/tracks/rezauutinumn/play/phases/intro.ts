import { useMothContext } from "@moth-state/Context";
import { useDrone } from "../../sounds/useDrone";
import { STEPS_SPEED, TIME } from "../constants";

export const useIntro = () => {
  const drone = useDrone();

  const { context } = useMothContext();

  const loop = () => {
    drone.play({
      startTime: context.currentTime,
      pitch: 12,
      duration: STEPS_SPEED * TIME * 4,
      volume: 0.1,
    });
  };

  return loop;
};

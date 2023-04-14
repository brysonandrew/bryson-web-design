
import { useMothContext } from "@moth-state/Context";
import { TIME, SPEED } from "./constants";
import { useDrone } from "../../sounds/useDrone";

export const useIntro = () => {
  const drone = useDrone();

  const { context } = useMothContext();

  const loop = () => {
    drone.play({
      startTime: context.currentTime,
      pitch: 24,
      duration: TIME * SPEED,
      volume: 0.4,
      type: "square",
    });
  };

  return loop;
};

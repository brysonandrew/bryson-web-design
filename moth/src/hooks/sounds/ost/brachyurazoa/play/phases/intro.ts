import {
  SPEED,
  TIME,
} from "@moth-hooks/sounds/ost/amynthasraptor/constants";
import { useDrone } from "@moth-hooks/sounds/ost/amynthasraptor/sounds/useDrone";
import { useMothContext } from "@moth-state/Context";

export const useIntro = () => {
  const drone = useDrone();

  const { context } = useMothContext();

  const loop = () => {
    drone.play({
      startTime: context.currentTime,
      pitch: 24,
      duration: TIME * SPEED,
      volume: 0.1,
      type: "square",
    });
  };

  return loop;
};

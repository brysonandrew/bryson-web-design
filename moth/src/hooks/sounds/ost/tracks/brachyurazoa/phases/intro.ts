import { useMothContext } from "@moth-state/Context";
import { TIME, SPEED } from "./constants";
import { useGlitch } from "../../../sounds/robos/useGlitch";

export const useIntro = () => {
  const glitch = useGlitch();
  const { context } = useMothContext();

  const loop = () => {
    glitch.play({
      startTime: context.currentTime,
      pitch: 24,
      duration: TIME * SPEED,
      volume: 0.4,
      type: "square",
    });
  };

  return loop;
};

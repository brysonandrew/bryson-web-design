import { useLoop } from "@moth-hooks/sounds/useLoop";
import { TIME, SPEED } from "../constants";
import { usePhases } from "./usePhases";

export const usePlay = () => {
  const phases = usePhases();

  const loop = useLoop({
    interval: TIME * SPEED * 0.125,
    phases,
  });

  return loop;
};

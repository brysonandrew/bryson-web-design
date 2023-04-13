import { useLoop } from "@moth-hooks/sounds/useLoop";
import { INTERVAL } from "./phases/constants";
import { usePhases } from "./usePhases";

export const usePlay = () => {
  const phases = usePhases();

  const loop = useLoop({
    interval: INTERVAL,
    phases,
  });

  return loop;
};

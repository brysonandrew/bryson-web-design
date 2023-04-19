import { useLoop } from "@moth-hooks/sounds/useLoop";
import { usePhases } from "./usePhases";
import { INTERVAL } from "./constants";

export const usePlay = () => {
  const phases = usePhases();

  const loop = useLoop({  
    interval: INTERVAL,
    phases,
  });

  return loop;
};

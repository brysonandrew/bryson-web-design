import { useLoop } from "@moth-hooks/sounds/useLoop";
import { INTERVAL } from "./phases/constants";
import { usePhases } from "./usePhases";
import { calcDuration } from "./calcDuration";

export const usePlay = () => {
  const phases = usePhases();

  const loopConfig = {
    interval: INTERVAL,
    phases,
  };
  const time = calcDuration(loopConfig);
  const play = useLoop(loopConfig);

  return { play, time };
};

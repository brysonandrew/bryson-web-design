import { useMothContext } from "@moth-state/Context";
import { useBass } from "../../sounds/useBass";

export const usePhase0 = () => {
  const { context } = useMothContext();

  const bass = useBass();
  const loop = () => {
    bass.play({ startTime: context.currentTime, duration: 4 });
  };
  return loop;
};

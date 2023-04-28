import { useMothContext } from "@moth-state/Context";
import { MACHINE_GUN_STEPS } from "../constants";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useKick } from "@moth-hooks/sounds/ost/drums/useKick";
import { useSnare } from "@moth-hooks/sounds/ost/drums/useSnare";

export const usePhase7 = () => {
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = ({ start, duration }: TPlayerConfig) => {
    MACHINE_GUN_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      snare.play({
        startTime: context.currentTime + index * d + start,
        volume: 0.2,
        duration: d,
      });
      kick.play({
        startTime: context.currentTime + index * d + start,
        volume: 0.2,
        duration: d,
      });
    });
  };

  return loop;
};

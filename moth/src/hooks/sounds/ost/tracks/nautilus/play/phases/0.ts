import { useMothContext } from "@moth-state/Context";
import {
  MACHINE_GUN_SPEED,
  MACHINE_GUN_STEPS,
} from "../../constants";
import { useKick } from "../../sounds/useKick";
import { useSnare } from "../../sounds/useSnare";
import { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const usePhase0 = () => {
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = ({ start, duration }: TPlayerConfig) => {
    MACHINE_GUN_STEPS.forEach((v, index) => {
      snare({
        startTime:
          context.currentTime + index * MACHINE_GUN_SPEED,
        volume: 0.2,
      });
      kick({
        startTime:
          context.currentTime + index * MACHINE_GUN_SPEED,
        volume: 0.2,
      });
    });
  };

  return loop;
};

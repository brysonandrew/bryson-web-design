import { useMothContext } from "@moth-state/Context";
import { useKick } from "../../sounds/useKick";

export const usePhase0 = () => {
  const { context } = useMothContext();

  const kick = useKick();
  const loop = () => {
    kick({ startTime: context.currentTime });
  };
  return loop;
};

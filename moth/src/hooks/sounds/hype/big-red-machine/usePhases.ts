import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { useDrums } from "./phases/drums";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const drums = useDrums();

  return [
    {
      sounds: [[phase0], [drums]],
    },
    {
      sounds: [[phase1], [drums]],
    },
  ];
};

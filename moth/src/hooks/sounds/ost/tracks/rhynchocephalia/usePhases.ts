import { usePhase0 } from "./phases/0";
import { usePhase3 } from "./phases/3";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase3 = usePhase3();

  return [
    {
      sounds: [[phase0, phase0, phase0, phase0], [phase3]],
      sustain: 3,
    },
  ];
};

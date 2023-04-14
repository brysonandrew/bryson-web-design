import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase3 = usePhase3();

  return [
    {
      sounds: [[phase2]],
      sustain: 4,
    },
    // {
    //   sounds: [[phase2]],
    //   sustain: 4,
    // },
    // {
    //   sounds: [[phase3]],
    //   sustain: 4,
    // },
    // {
    //   sounds: [[phase0, phase0, phase0, phase0], [phase1]],
    //   sustain: 3,
    // },
  ];
};

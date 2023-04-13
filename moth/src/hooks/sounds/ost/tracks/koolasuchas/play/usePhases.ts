import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";
import { useDrums } from "./phases/drums";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase3 = usePhase3();
  const drums = useDrums();

  return [
    {
      sounds: [[phase0]],
    },
    {
      sounds: [[phase0, phase0], [phase1]],
      sustain: 1,
    },
    {
      sounds: [[phase2, phase3]],
      sustain: 0,
    },
    {
      sounds: [[drums]],
      repeat: 11,
    },
  ];
};

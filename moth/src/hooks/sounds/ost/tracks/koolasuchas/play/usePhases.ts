import { usePhase0 } from "./phases/0";
import { usePhase10 } from "./phases/1.0";
import { usePhase11 } from "./phases/1.1";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";
import { useDrums } from "./phases/drums";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase10 = usePhase10();
  const phase11 = usePhase11();

  const phase2 = usePhase2();
  const phase3 = usePhase3();
  const drums = useDrums();

  return [
    {
      sounds: [[phase0]],
    },
    {
      sounds: [
        [phase0, phase0],
        [phase10, phase11],
      ],
      sustain: 1,
    },
    {
      sounds: [[phase2]],
    },
    {
      sounds: [[phase0], [phase3], [drums]],
      repeat: 11,
    },
  ];
};

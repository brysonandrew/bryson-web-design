import { usePhase0 } from "./phases/0";
import { usePhase10 } from "./phases/1.0";
import { usePhase11 } from "./phases/1.1";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";
import { useDrums } from "./phases/drums";
import { useHihat0 } from "./phases/hihat0";
import { useHihat1 } from "./phases/hihat1";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase10 = usePhase10();
  const phase11 = usePhase11();
  const phase2 = usePhase2();
  const phase3 = usePhase3();
  const drums = useDrums();
  const hihat0 = useHihat0();
  const hihat1 = useHihat1();

  return [
    {
      sounds: [[phase0], [hihat0]],
    },
    {
      sounds: [
        [phase0, phase0],
        [phase10, phase11],
        [hihat1],
      ],
      sustain: 1,
    },
    {
      sounds: [[phase2]],
    },
    {
      sounds: [[phase0], [phase3, phase3], [drums]],
      repeat: 11,
    },
  ];
};

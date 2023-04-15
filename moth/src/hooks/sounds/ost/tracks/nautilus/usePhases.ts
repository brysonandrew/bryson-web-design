import { usePhase3 } from "./phases/3";
import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { usePhase2 } from "./phases/2";
import { usePhase4 } from "./phases/4";
import { useDrums } from "./phases/drums";
import { usePhase5 } from "./phases/5";
import { usePhase6 } from "./phases/6";
import { usePhase7 } from "./phases/7";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase3 = usePhase3();
  const phase4 = usePhase4();
  const phase5 = usePhase5();
  const phase6 = usePhase6();
  const phase7 = usePhase7();

  const drums = useDrums();

  return [
    {
      sounds: [[phase0], [drums]],
    },
    {
      sounds: [[phase1], [drums]],
    },
    {
      sounds: [[phase2], [drums]],
    },
    {
      sounds: [[phase3], [drums]],
    },
    {
      sounds: [[phase4], [drums]],
    },
    {
      sounds: [[phase5], [drums]],
    },
    {
      sounds: [[phase6], [drums]],
      repeat: 4,
    },
    {
      sounds: [[phase7]],
    },
  ];
};

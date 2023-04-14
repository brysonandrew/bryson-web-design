import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";
import { usePhase4 } from "./phases/4";
import { usePhase5 } from "./phases/5";

import { useDrums } from "./phases/drums";
import { useIntro } from "./phases/intro";

export const usePhases = () => {
  const intro = useIntro();
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase3 = usePhase3();
  const phase4 = usePhase4();
  const phase5 = usePhase5();

  const drums = useDrums();

  return [
    {
      sounds: [[intro]],
      sustain: 3,
    },
    {
      sounds: [[phase0], [drums]],
      repeat: 3,
    },
    {
      sounds: [[phase1], [drums]],
      repeat: 3,
    },
    {
      sounds: [[phase2], [drums]],
      repeat: 3,
    },
    {
      sounds: [[phase3], [drums]],
      repeat: 3,
    },
    {
      sounds: [[phase0], [drums]],
    },
    {
      sounds: [[phase4], [drums]],
    },
    {
      sounds: [[phase0], [drums]],
    },
    {
      sounds: [[phase4], [drums]],
    },
    {
      sounds: [[phase1], [drums]],
      repeat: 3,
    },
    {
      sounds: [[phase2], [drums]],
    },
    {
      sounds: [[phase4], [drums]],
    },
    {
      sounds: [[phase2], [drums]],
    },
    {
      sounds: [[phase4], [drums]],
    },
    {
      sounds: [[phase3], [drums], [phase4]],
    },
    {
      sounds: [[phase3], [drums], [phase4]],
    },
    {
      sounds: [[phase3], [drums], [phase4]],
    },
    {
      sounds: [[phase3], [drums], [phase4]],
    },
    {
      sounds: [[phase5], [drums]],
      repeat: 3,
      sustain: 3
    },
  ];
};

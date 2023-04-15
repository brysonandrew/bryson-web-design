import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";
import { usePhase40 } from "./phases/4.0";
import { usePhase41 } from "./phases/4.1";
import { usePhase42 } from "./phases/4.2";

import { usePhase5 } from "./phases/5";

import { useDrums } from "./phases/drums";
import { useIntro } from "./phases/intro";

export const usePhases = () => {
  const intro = useIntro();
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase3 = usePhase3();
  const phase40 = usePhase40();
  const phase41 = usePhase41();
  const phase42 = usePhase42();

  const phase5 = usePhase5();

  const drums = useDrums();

  return [
    {
      sounds: [[intro]],
      sustain: 3 + 4,
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
      sounds: [[phase42], [drums], [phase40]],
    },
    {
      sounds: [[phase0], [drums]],
    },
    {
      sounds: [[phase42], [drums]],
    },
    {
      sounds: [[phase1], [drums]],
      repeat: 3,
    },
    {
      sounds: [[phase2], [drums]],
    },
    {
      sounds: [[phase41], [drums], [phase40]],
    },
    {
      sounds: [[phase2], [drums]],
    },
    {
      sounds: [[phase41], [drums]],
    },
    {
      sounds: [[phase3], [drums], [phase40]],
    },
    {
      sounds: [[phase3], [drums], [phase40]],
    },
    {
      sounds: [[phase3], [drums], [phase40]],
    },
    {
      sounds: [[phase3], [drums], [phase40]],
    },
    {
      sounds: [[phase5], [drums]],
      repeat: 3,
      sustain: 3,
    },
  ];
};

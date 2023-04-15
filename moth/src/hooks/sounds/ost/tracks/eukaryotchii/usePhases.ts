import { usePhase1 } from "./phases/1";
import { usePhase0 } from "./phases/0";
import { useDrums } from "./phases/drums";
import { usePhase2 } from "./phases/2";
import { usePhase5 } from "./phases/5";
import { usePhase6 } from "./phases/6";
import { usePhase8 } from "./phases/8";
import { usePhase9 } from "./phases/9";
import { useKick } from "./phases/kick";
import { usePhase10 } from "./phases/10";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase5 = usePhase5();
  const phase6 = usePhase6();
  const phase8 = usePhase8();
  const phase9 = usePhase9();
  const phase10 = usePhase10();

  const drums = useDrums();
  const kick = useKick();

  const verse = [
    {
      sounds: [[phase1]],
    },
    {
      sounds: [
        [phase0, phase0, phase0, phase5],
        [drums],
        [phase2],
      ],
      sustain: 3,
    },
    {
      sounds: [
        [phase1, phase0, phase1, phase5],
        [drums],
        [phase2],
      ],
      sustain: 3,
    },
    {
      sounds: [
        [phase0, phase0, phase0, phase5],
        [drums],
        [phase2],
      ],
      sustain: 3,
    },
    {
      sounds: [
        [phase1, phase1, phase1, phase6],
        [drums],
        [phase2],
      ],
      sustain: 3,
    },
  ];

  return [
    ...verse,
    {
      sounds: [[phase8], [kick], [phase2]],
      sustain: 3,
    },
    {
      sounds: [[phase8], [kick], [phase2]],
      sustain: 3,
    },
    {
      sounds: [[phase8], [kick], [phase2]],
      sustain: 3,
    },
    {
      sounds: [[phase8], [kick], [phase2]],
      sustain: 3,
    },
    {
      sounds: [[phase9], [kick], [phase2]],
      sustain: 3,
    },
    {
      sounds: [[phase10], [kick], [phase2]],
      sustain: 3,
    },
    {
      sounds: [[phase9], [kick], [phase2]],
      sustain: 3,
    },
    {
      sounds: [[phase10], [kick], [phase2]],
      sustain: 3,
    },
    ...verse,
    {
      sounds: [[phase1, phase1, phase1, phase1], [kick]],
      sustain: 3,
    },
    ...verse,
  ];
};

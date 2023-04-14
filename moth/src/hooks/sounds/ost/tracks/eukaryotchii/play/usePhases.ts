import { usePhase1 } from "./phases/1";
import { usePhase0 } from "./phases/0";
import { usePhaseAscent } from "./phases/ascent";
import { usePhaseDescent } from "./phases/descent";
import { useDrums } from "./phases/drums";
import { usePhase2 } from "./phases/2";
import { usePhase4 } from "./phases/4";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phaseAscent = usePhaseAscent();
  const phaseDescent = usePhaseDescent();
  const phase4 = usePhase4();
  const drums = useDrums();

  return [
    {
      sounds: [[phase1]],
    },
    {
      sounds: [
        [phase0, phase0, phase0, phaseAscent],
        [drums],
        [phase2],
      ],
      sustain: 3,
    },
    {
      sounds: [
        [phase1, phase0, phase1, phaseDescent],
        [drums],
        [phase2],
      ],
      sustain: 3,
    },
    {
      sounds: [[phase1]],
    },
    {
      sounds: [[phase1]],
    },
    {
      sounds: [[phase1]],
    },
  ];
};

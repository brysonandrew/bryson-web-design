import { usePhase1 } from "./phases/1";
import { usePhase0 } from "./phases/0";
import { usePhaseAscent } from "./phases/ascent";
import { usePhaseDescent } from "./phases/descent";
import { useDrums } from "./phases/drums";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phaseAscent = usePhaseAscent();
  const phaseDescent = usePhaseDescent();
  const drums = useDrums();

  return [
    {
      sounds: [[phase0, phase0, phase0, phase0], [drums]],
      sustain: 3,
    },
  ];
};

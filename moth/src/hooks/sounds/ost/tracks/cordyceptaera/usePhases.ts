import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";
import { usePhase4 } from "./phases/4";
import { usePhase5 } from "./phases/5";
import { usePhase6 } from "./phases/6";
import { usePhase7 } from "./phases/7";
import { useAscending0 } from "./phases/ascending0";
import { useAscending1 } from "./phases/ascending1";

import { useBass } from "./phases/bass";
import { useDrop } from "./phases/drop";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase3 = usePhase3();
  const phase4 = usePhase4();
  const phase5 = usePhase5();
  const phase6 = usePhase6();
  const phase7 = usePhase7();
  const ascending0 = useAscending0();
  const ascending1 = useAscending1();

  const bass = useBass();
  const drop = useDrop();

  return [
    {
      sounds: [[phase0], [phase3], [bass]],
    },
    {
      sounds: [[phase0], [phase4], [bass]],
    },
    {
      sounds: [[phase1], [phase5], [bass]],
    },
    {
      sounds: [[phase1], [phase6], [bass]],
    },
    {
      sounds: [[phase1], [phase3], [bass]],
    },
    {
      sounds: [[phase2], [phase4], [bass]],
    },
    {
      sounds: [[ascending0], [phase3], [bass]],
    },
    {
      sounds: [[ascending0], [ascending1], [bass]],
    },
    {
      sounds: [[drop], [phase0]],
    },
    {
      sounds: [[phase0], [phase3], [bass]],
    },
    {
      sounds: [[phase0], [phase4], [bass]],
    },
  ];
};

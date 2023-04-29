import { useDrumsBuild } from "./phases/drums-build";
import { useIntro0 } from "./phases/intro0";
import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { useIntro1 } from "./phases/intro1";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";
import { useBass0 } from "./phases/bass0";
import { usePhase4 } from "./phases/phase4";

export const usePhases = () => {
  const intro0 = useIntro0();
  const drums = useDrumsBuild();
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase3 = usePhase3();
  const phase4 = usePhase4();

  const intro1 = useIntro1();
  const bass0 = useBass0();

  return [
    {
      sounds: [Array(4).fill(bass0), Array(8).fill(phase4)],
    },
    // {
    //   sounds: [[phase4,phase4,phase4,phase4,phase4,phase4]],
    // },
    // {
    //   sounds: [
    //     [phase3,bass0,phase3,bass0,phase3,bass0],
    //     // ,[phase3],[bass0],[phase3],[bass0],[phase3],[bass0]
    //   ],
    // },
    // {
    //   sounds: [[bass0]],
    // },
    // {
    //   sounds: [[phase3], [drums]],
    // },
    // {
    //   sounds: [
    //     [intro, drums],
    //     [null, phase0],
    //   ],
    // },
  ];
};

import { useIntro0 } from "./phases/intro0";
import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { useIntro1 } from "./phases/intro1";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";
import { useBass0 } from "./phases/bass0";
import { useBass1 } from "./phases/bass1";
import { usePhase4 } from "./phases/phase4";
import { useDrums0 } from "./phases/drums-0";
import { useBass2 } from "./phases/bass2";
import { useDrums2 } from "./phases/drums-2";

export const usePhases = () => {
  const bass0 = useBass0();
  const bass1 = useBass1();
  const bass2 = useBass2();

  const drums0 = useDrums0();
  const drums2 = useDrums2();

  const intro0 = useIntro0();
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase3 = usePhase3();
  const phase4 = usePhase4();
  const intro1 = useIntro1();

  return [
    {
      sounds: [Array(4).fill(bass0), [phase4], [phase3], [drums0], [drums2]],
    },
    // {
    //   sounds: [Array(4).fill(bass0), [phase1], []],
    // },
    // {
    //   sounds: [[bass0, drums0, bass0, drums0]],
    // },
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

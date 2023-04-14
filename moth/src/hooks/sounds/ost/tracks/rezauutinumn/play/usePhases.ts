import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";
import { useIntro } from "./phases/intro";

export const usePhases = () => {
  const intro = useIntro();
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase3 = usePhase3();

  return [
    {
      sounds: [[intro]],
      sustain: 3,
    },
    {
      sounds: [[phase0]],
      repeat: 3,
    },
    {
      sounds: [[phase1]],
      repeat: 3,
    },
    {
      sounds: [[phase2]],
      repeat: 3,
    },
    {
      sounds: [[phase3]],
      repeat: 3,
    },
  ];
};

import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";
import { useDrums } from "./phases/drums";
import { useIntro } from "./phases/intro";

export const usePhases = () => {
  const intro = useIntro();
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const drums = useDrums();

  return [
    {
      sounds: [[intro]],
    },
    // {
    //   sounds: [[phase1, phase0], [drums]],
    // },
  ];
};

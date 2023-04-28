import { usePhase1 } from "./phases/1";
import { usePhase0 } from "./phases/0";
import { useIntro } from "./phases/intro";

export const usePhases = () => {
  const intro = useIntro();
  const phase0 = usePhase0();
  const phase1 = usePhase1();

  return [
    {
      sounds: [[intro]],
    },
    {
      sounds: [[phase0]],
    },
    {
      sounds: [[phase1]],
    },
  ];
};

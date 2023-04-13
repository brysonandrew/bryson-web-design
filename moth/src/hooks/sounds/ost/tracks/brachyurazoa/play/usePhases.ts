import { usePhase0 } from "./phases/0";
import { useIntro } from "./phases/intro";

export const usePhases = () => {
  const intro = useIntro();
  const phase0 = usePhase0();

  return [
    {
      sounds: [[intro]],
    },
    {
      sounds: [[phase0]],
      repeat: 4,
    },
  ];
};

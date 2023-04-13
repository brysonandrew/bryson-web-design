import { usePhase1 } from "./phases/1";
import { usePhase0 } from "./phases/0";
import { usePhase2 } from "./phases/2";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();

  return [
    {
      sound: phase0,
    },
    {
      sound: phase1,
    },
    {
      sound: phase0,
    },
    {
      sound: phase2,
    },
  ];
};

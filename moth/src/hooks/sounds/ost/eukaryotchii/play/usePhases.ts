import { usePhase1 } from "./phases/1";
import { usePhase0 } from "./phases/0";

export const usePhases = () => {
  const phase0 = usePhase0();
  const phase1 = usePhase1();

  return [
    {
      sound: phase0,
    },
    // {
    //   sound: phase1,
    // },
  ];
};

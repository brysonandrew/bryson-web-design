import { usePhase0 } from "./phases/0";

export const usePhases = () => {
  const phase0 = usePhase0();

  return [
    {
      sounds: [[phase0]],
      repeat: 0,
    },
  ];
};

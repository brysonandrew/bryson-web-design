import { usePhase0 } from "./phases/0";

export const usePhases = () => {
  const phase0 = usePhase0();

  return [
    {
      sound: phase0.play,
      repeat: 3,
    },
  ];
};

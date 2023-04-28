import { usePlay as usePavlovichPlay } from "@moth-hooks/sounds/hype/pavlovich-taser-punch/usePlay";
import { usePlay as useBigRedMachinePlay } from "@moth-hooks/sounds/hype/big-red-machine/usePlay";

export const useTracks = () => {
  const handlePavlovichTap = usePavlovichPlay();
  const handleBigRedMachineTap = useBigRedMachinePlay();

  return {
    pavlovichTaserPunch: handlePavlovichTap,
    bigRedMachine: handleBigRedMachineTap,
  };
};

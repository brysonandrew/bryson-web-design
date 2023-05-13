import { usePlay as usePavlovichPlay } from "@moth-hooks/sounds/hype/pavlovich-taser-punch/usePlay";
import { usePlay as useBigRedMachinePlay } from "@moth-hooks/sounds/hype/big-red-machine/usePlay";
import { usePlay as useMinistryPlay } from "@moth-hooks/sounds/hype/ministry/usePlay";

export const useTracks = () => {
  const handlePavlovichTap = usePavlovichPlay();
  const handleBigRedMachineTap = useBigRedMachinePlay();
  const handleMinistryPlay = useMinistryPlay();

  return {
    pavlovichTaserPunch: handlePavlovichTap,
    bigRedMachine: handleBigRedMachineTap,
    ministry: handleMinistryPlay,
  };
};

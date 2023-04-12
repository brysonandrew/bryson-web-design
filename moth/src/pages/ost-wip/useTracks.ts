import { usePlay as useSuperPowerPlay } from "@moth-hooks/sounds/ost/super-power/usePlay";

export const useTracks = () => {
  const handleSuperPowerPlay = useSuperPowerPlay();

  return {
    "super-power": handleSuperPowerPlay,
  };
};

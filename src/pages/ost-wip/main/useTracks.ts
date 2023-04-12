import { usePlay as useSuperPowerPlay } from "../tracks/super-power/usePlay";
import { usePlay as useErickHaydenPlay } from "../tracks/erick-hayden/usePlay";
import { usePlay as useWastePlay } from "../tracks/waste/usePlay";
import { usePlay as useBladePlay } from "../tracks/blade/usePlay";
import { usePlay as useDemonsPlay } from "../tracks/demons/usePlay";
import { usePlay as useJiriProzniakPlay } from "../tracks/jiri-prozniak/usePlay";
import { usePlay as useSoldicPlay } from "../tracks/soldic/usePlay";
import { usePlay as useWindRacePlay } from "../tracks/wind-race/usePlay";
import { usePlay as useMiraclesPlay } from "../tracks/miracles/usePlay";

export const useTracks = () => {
  const handleSuperPowerPlay = useSuperPowerPlay();
  const handleErickHaydenPlayPlay = useErickHaydenPlay();
  const handleWastePlay = useWastePlay();
  const handleBladePlay = useBladePlay();
  const handleDemonsPlay = useDemonsPlay();
  const handleJiriProzniakPlay = useJiriProzniakPlay();
  const handleSoldicPlay = useSoldicPlay();
  const handleWindRacePlay = useWindRacePlay();
  const handleMiraclesPlay = useMiraclesPlay();

  return {
    "wind-race": handleWindRacePlay,
    "super-power": handleSuperPowerPlay,
    "erick-hayden": handleErickHaydenPlayPlay,
    waste: handleWastePlay,
    blade: handleBladePlay,
    demons: handleDemonsPlay,
    "jiri-prozniak": handleJiriProzniakPlay,
    soldic: handleSoldicPlay,
    miracles: handleMiraclesPlay,
  };
};

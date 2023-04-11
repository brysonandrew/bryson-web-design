import { usePlay as useKoolasuchasPlay } from "@moth-hooks/sounds/ost/koolasuchas/usePlay";
import { usePlay as useEukaryotchiiPlay } from "@moth-hooks/sounds/ost/eukaryotchii/usePlay";
import { usePlay as useBrachyurazoaPlay } from "@moth-hooks/sounds/ost/brachyurazoa/usePlay";
import { usePlay as useCordyceptaeraPlay } from "@moth-hooks/sounds/ost/cordyceptaera/usePlay";
import { usePlay as useNautilusPlay } from "@moth-hooks/sounds/ost/nautilus/usePlay";
import { usePlay as useVelociraptorPlay } from "@moth-hooks/sounds/ost/velociraptor/usePlay";
import { usePlay as useRhynchocephaliaPlay } from "@moth-hooks/sounds/ost/rhynchocephalia/usePlay";
import { usePlay as useMiraclesPlay } from "@moth-hooks/sounds/ost/miracles/usePlay";
import { usePlay as useWindRacePlay } from "@moth-hooks/sounds/ost/wind-race/usePlay";
import { usePlay as useSuperPowerPlay } from "@moth-hooks/sounds/ost/super-power/usePlay";
import { usePlay as useErickHaydenPlay } from "@moth-hooks/sounds/ost/erick-hayden/usePlay";
import { usePlay as useWastePlay } from "@moth-hooks/sounds/ost/waste/usePlay";
import { usePlay as useBladePlay } from "@moth-hooks/sounds/ost/blade/usePlay";
import { usePlay as useDemonsPlay } from "@moth-hooks/sounds/ost/demons/usePlay";
import { usePlay as useJiriProzniakPlay } from "@moth-hooks/sounds/ost/jiri-prozniak/usePlay";
import { usePlay as useSoldicPlay } from "@moth-hooks/sounds/ost/soldic/usePlay";

export const useTracks = () => {
  const handleKoolasuchasTap = useKoolasuchasPlay();
  const handleEukaryotchiiTap = useEukaryotchiiPlay();
  const handleBrachyurazoaTap = useBrachyurazoaPlay();
  const handleCordyceptaeraPlay = useCordyceptaeraPlay();
  const handleNautilusPlay = useNautilusPlay();
  const handleVelociraptorPlay = useVelociraptorPlay();
  const handleRhynchocephaliaPlay =
    useRhynchocephaliaPlay();
  const handleMiraclesPlay = useMiraclesPlay();
  const handleWindRacePlay = useWindRacePlay();
  const handleSuperPowerPlay = useSuperPowerPlay();
  const handleErickHaydenPlayPlay = useErickHaydenPlay();
  const handleWastePlay = useWastePlay();
  const handleBladePlay = useBladePlay();
  const handleDemonsPlay = useDemonsPlay();
  const handleJiriProzniakPlay = useJiriProzniakPlay();
  const handleSoldicPlay = useSoldicPlay()

  return {
    koolasuchas: handleKoolasuchasTap,
    eukaryotchii: handleEukaryotchiiTap,
    brachyurazoa: handleBrachyurazoaTap,
    cordyceptaera: handleCordyceptaeraPlay,
    nautilus: handleNautilusPlay,
    velociraptor: handleVelociraptorPlay,
    rhynchocephalia: handleRhynchocephaliaPlay,
    miracles: handleMiraclesPlay,
    "wind-race": handleWindRacePlay,
    "super-power": handleSuperPowerPlay,
    "erick-hayden": handleErickHaydenPlayPlay,
    waste: handleWastePlay,
    blade: handleBladePlay,
    demons: handleDemonsPlay,
    "jiri-prozniak": handleJiriProzniakPlay,
    soldic: handleSoldicPlay
  };
};

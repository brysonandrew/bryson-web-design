import { usePlay as useKoolasuchasPlay } from "@moth-hooks/sounds/ost/tracks/koolasuchas/usePlay";
import { usePlay as useEukaryotchiiPlay } from "@moth-hooks/sounds/ost/tracks/eukaryotchii/usePlay";
import { usePlay as useBrachyurazoaPlay } from "@moth-hooks/sounds/ost/tracks/brachyurazoa/usePlay";
import { usePlay as useCordyceptaeraPlay } from "@moth-hooks/sounds/ost/tracks/cordyceptaera/usePlay";
import { usePlay as useNautilusPlay } from "@moth-hooks/sounds/ost/tracks/nautilus/usePlay";
import { usePlay as useAmynthasraptorPlay } from "@moth-hooks/sounds/ost/tracks/amynthasraptor/usePlay";
import { usePlay as useRhynchocephaliaPlay } from "@moth-hooks/sounds/ost/tracks/rhynchocephalia/usePlay";
import { usePlay as useRezauutinumnPlay } from "@moth-hooks/sounds/ost/tracks/rezauutinumn/usePlay";

export const useTracks = () => {
  const handleKoolasuchasTap = useKoolasuchasPlay();
  const handleEukaryotchiiTap = useEukaryotchiiPlay();
  const handleBrachyurazoaTap = useBrachyurazoaPlay();
  const handleCordyceptaeraPlay = useCordyceptaeraPlay();
  const handleNautilusPlay = useNautilusPlay();
  const handleAmynthasraptorPlay = useAmynthasraptorPlay();
  const handleRhynchocephaliaPlay =
    useRhynchocephaliaPlay();
  const handleRezauutinumnPlay = useRezauutinumnPlay();

  return {
    koolasuchas: handleKoolasuchasTap,
    eukaryotchii: handleEukaryotchiiTap,
    brachyurazoa: handleBrachyurazoaTap.play,
    cordyceptaera: handleCordyceptaeraPlay,
    nautilus: handleNautilusPlay,
    amynthasraptor: handleAmynthasraptorPlay,
    rhynchocephalia: handleRhynchocephaliaPlay,
    rezauutinumn: handleRezauutinumnPlay,
  };
};

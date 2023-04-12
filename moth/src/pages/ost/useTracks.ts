import { usePlay as useKoolasuchasPlay } from "@moth-hooks/sounds/ost/koolasuchas/usePlay";
import { usePlay as useEukaryotchiiPlay } from "@moth-hooks/sounds/ost/eukaryotchii/usePlay";
import { usePlay as useBrachyurazoaPlay } from "@moth-hooks/sounds/ost/brachyurazoa/usePlay";
import { usePlay as useCordyceptaeraPlay } from "@moth-hooks/sounds/ost/cordyceptaera/usePlay";
import { usePlay as useNautilusPlay } from "@moth-hooks/sounds/ost/nautilus/usePlay";
import { usePlay as useAmynthasraptorPlay } from "@moth-hooks/sounds/ost/amynthasraptor/usePlay";
import { usePlay as useRhynchocephaliaPlay } from "@moth-hooks/sounds/ost/rhynchocephalia/usePlay";
import { usePlay as useRezauutinumnPlay } from "@moth-hooks/sounds/ost/rezauutinumn/usePlay";

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
    brachyurazoa: handleBrachyurazoaTap,
    cordyceptaera: handleCordyceptaeraPlay,
    nautilus: handleNautilusPlay,
    amynthasraptor: handleAmynthasraptorPlay,
    rhynchocephalia: handleRhynchocephaliaPlay,
    rezauutinumn: handleRezauutinumnPlay,
  };
};

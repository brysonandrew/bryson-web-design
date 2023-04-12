import { usePlay as useKoolasuchasPlay } from "@moth-hooks/sounds/ost/koolasuchas/play/usePlay";
import { usePlay as useEukaryotchiiPlay } from "@moth-hooks/sounds/ost/eukaryotchii/play/usePlay";
import { usePlay as useBrachyurazoaPlay } from "@moth-hooks/sounds/ost/brachyurazoa/play/usePlay";
import { usePlay as useCordyceptaeraPlay } from "@moth-hooks/sounds/ost/cordyceptaera/play/usePlay";
import { usePlay as useNautilusPlay } from "@moth-hooks/sounds/ost/nautilus/play/usePlay";
import { usePlay as useAmynthasraptorPlay } from "@moth-hooks/sounds/ost/amynthasraptor/play/usePlay";
import { usePlay as useRhynchocephaliaPlay } from "@moth-hooks/sounds/ost/rhynchocephalia/play/usePlay";
import { usePlay as useRezauutinumnPlay } from "@moth-hooks/sounds/ost/rezauutinumn/play/usePlay";

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

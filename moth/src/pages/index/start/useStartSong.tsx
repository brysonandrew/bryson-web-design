import { usePlay } from "@moth-hooks/sounds/ost/tracks/rhynchocephalia/usePlay";
import { useMothContext } from "@moth-state/Context";
import { useEffect } from "react";

export const useStartSong = () => {
  const { play, stop } = usePlay();
  const { isSound } = useMothContext();

  const handler = () => {
    if (isSound) {
      play();
    }
  };
  useEffect(() => {
    if (isSound) {
      handler();
    } else {
      stop();
    }
  }, [isSound]);

  return {
    play: handler,
    stop,
  };
};

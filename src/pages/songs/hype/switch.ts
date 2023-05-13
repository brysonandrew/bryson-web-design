import type { TTrackHypeKey } from "./types";
import { useTracks } from "./useTracks";

export const useSwitchTracks = () => {
  const tracks = useTracks();
  const handler = (key: TTrackHypeKey) => {
    switch (key) {
      case "pavlovich-taser-punch": {
        return tracks.pavlovichTaserPunch.play();
      }
      case "big-red-machine": {
        return tracks.bigRedMachine.play();
      }
      case "ministry": {
        return tracks.ministry.play();
      }
      default: {
        return tracks.pavlovichTaserPunch.play();
      }
    }
  };
  return handler;
};

import type { TTrackSampleKey } from "./types";
import { useTracks } from "./useTracks";

export const useSwitchTracks = () => {
  const tracks = useTracks();
  const handler = (key: TTrackSampleKey) => {
    switch (key) {
      case "rhynchocephalia": {
        return tracks.rhynchocephalia.play();
      }
      case "amynthasraptor": {
        return tracks.amynthasraptor.play();
      }
      case "eukaryotchii": {
        return tracks.eukaryotchii.play();
      }
      case "brachyurazoa": {
        return tracks.brachyurazoa.play();
      }
      case "cordyceptaera": {
        return tracks.cordyceptaera.play();
      }
      case "nautilus": {
        return tracks.nautilus.play();
      }
      case "koolasuchas": {
        return tracks.koolasuchas.play();
      }
      case "rezauutinumn": {
        return tracks.rezauutinumn.play();
      }
      default: {
        return tracks.nautilus.play();
      }
    }
  };
  return handler;
};

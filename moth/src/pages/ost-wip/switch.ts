import { TTrackKey } from "./types";
import { useTracks } from "./useTracks";

export const useSwitchTracks = () => {
  const tracks = useTracks();
  const handler = (key: TTrackKey) => {
    switch (key) {
      case "jiri-prozniak": {
        return tracks["jiri-prozniak"].play();
      }
      case "erick-hayden": {
        return tracks["erick-hayden"].play();
      }
      case "super-power": {
        return tracks["super-power"].play();
      }
      case "wind-race": {
        return tracks["wind-race"].play();
      }
      case "rhynchocephalia": {
        return tracks.rhynchocephalia.play();
      }
      case "velociraptor": {
        return tracks.velociraptor.play();
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
      case "waste": {
        return tracks.waste.play();
      }
      case "demons": {
        return tracks.demons.play();
      }
      case "blade": {
        return tracks.blade.play();
      }
      case "soldic": {
        return tracks.soldic.play();
      }
      default: {
        return tracks.blade.play();
      }
    }
  };
  return handler;
};

import type { TTrackKey } from "./types";
import { useTracks } from "./useTracks";

export const useSwitchTracks = () => {
  const tracks = useTracks();
  const handler = (key: TTrackKey) => {
    switch (key) {
      case "super-power": {
        return tracks["super-power"].play();
      }
    }
  };
  return handler;
};

import type { TRACKS } from "./constants";

export type TTrackKey = (typeof TRACKS)[number];

export type TConfig = {
  nowPlaying: TTrackKey | null;
  onPlay(name?: TTrackKey): void;
};

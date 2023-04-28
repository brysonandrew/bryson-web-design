import type { TRACKS as HYPE_TRACK } from "./constants";

export type TTrackHypeKey = (typeof HYPE_TRACK)[number];

export type TConfig = {
  nowPlaying: TTrackHypeKey | null;
  onPlay(name?: TTrackHypeKey): void;
};

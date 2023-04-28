import type { TRACKS as SAMPLE_TRACK } from "../sample/constants";

export type TTrackSampleKey = (typeof SAMPLE_TRACK)[number];

export type TConfig = {
  nowPlaying: TTrackSampleKey | null;
  onPlay(name?: TTrackSampleKey): void;
};

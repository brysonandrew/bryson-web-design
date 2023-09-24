import {
  TChannelContext,
  TConnectionContext,
  TLogsContext,
  TStatusRecordContext,
} from '@pages/kino/config/types';
import { MutableRefObject } from 'react';

export type TActiveStream = Blob | null;

export type TActiveStreamContext = {
  activeStream: TActiveStream;
  onUpdateActiveStream(activeStream: TActiveStream): void;
};

export type TMediaSource = MediaSource | null;

export type TMediaSourceContext = {
  mediaSource: TMediaSource;
  onUpdateMediaSource(mediaSource: TMediaSource): void;
};

export type TContext = TStatusRecordContext &
  TLogsContext &
  TConnectionContext &
  TChannelContext & {
    videoRef: MutableRefObject<HTMLVideoElement | null>;
  };

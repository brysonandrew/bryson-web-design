import {
  TConnectionContext,
  TLogsContext,
  TStatusRecordContext,
  TUpdateChannelHandler,
} from '@pages/kino/config/types';
import { MutableRefObject } from 'react';

export type TActiveStream = Blob | null;

export type TReceiveChannelContext = {
  receiveChannel: RTCDataChannel | null;
  onUpdateReceiveChannel: TUpdateChannelHandler;
};

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
  TReceiveChannelContext &
  TConnectionContext &
  TMediaSourceContext & {
    videoRef: MutableRefObject<HTMLVideoElement | null>;
  };

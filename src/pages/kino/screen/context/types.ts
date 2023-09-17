import { TConnectionContext, TUpdateChannelHandler } from '@pages/kino/config/types';

export type TActiveStream = MediaStream | null;

export type TReceiveChannelContext = {
  receiveChannel: RTCDataChannel | null;
  onUpdateReceiveChannel: TUpdateChannelHandler
};

export type TActiveStreamContext = {
  activeStream: TActiveStream;
  onUpdateActiveStream(activeStream: TActiveStream): void;
};

export type TContext = TReceiveChannelContext &
  TConnectionContext &
  TActiveStreamContext;

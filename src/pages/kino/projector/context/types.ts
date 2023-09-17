import {
  TConnectionContext,
  TLogsContext,
} from '@pages/kino/config/types';

export type TContext = TConnectionContext &
  TLogsContext & {
    sendChannel: RTCDataChannel;
  };

import {
  TConnectionContext,
  TLogsContext,
  TStatusRecordContext,
} from '@pages/kino/config/types';
import { TReceiveChannelContext } from '@pages/kino/screen/context/types';

export type TContext = TConnectionContext &
  TStatusRecordContext &
  TLogsContext &
  TReceiveChannelContext & {
    sendChannel: RTCDataChannel;
  };

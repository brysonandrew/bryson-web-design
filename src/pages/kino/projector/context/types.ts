import {
  TChannelContext,
  TConnectionContext,
  TLogsContext,
  TStatusRecordContext,
} from '@pages/kino/config/types';

export type TContext = TConnectionContext &
  TStatusRecordContext &
  TLogsContext &
  TChannelContext;

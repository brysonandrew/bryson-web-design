import {
  TChannelContext,
  TConnectionContext,
  TLogsContext,
  TStatusRecordContext,
} from '@pages/_workshop/kino/config/types';

export type TContext = TConnectionContext &
  TStatusRecordContext &
  TLogsContext &
  TChannelContext;

import { VOIDOP } from '@constants/functions';
import {
  TActiveStreamContext,
  TContext,
  TReceiveChannelContext,
} from './types';
import { CONNECTION_CONTEXT, LOGS_CONTEXT, RECEIVE_CHANNEL_CONTEXT, STATUS_CONTEXT } from '@pages/kino/config';

const ACTIVE_STREAM_CONTEXT: TActiveStreamContext = {
  activeStream: null,
  onUpdateActiveStream: VOIDOP,
};

export const CONTEXT: TContext = {
  ...CONNECTION_CONTEXT,
  ...STATUS_CONTEXT,
  ...ACTIVE_STREAM_CONTEXT,
  ...RECEIVE_CHANNEL_CONTEXT,
  ...LOGS_CONTEXT,
};

import { VOIDOP } from '@constants/functions';
import {
  TActiveStreamContext,
  TContext,
  TReceiveChannelContext,
} from './types';
import { CONNECTION_CONTEXT, LOGS_CONTEXT } from '@pages/kino/config';

const ACTIVE_STREAM_CONTEXT: TActiveStreamContext = {
  activeStream: null,
  onUpdateActiveStream: VOIDOP,
};

const RECEIVE_CHANNEL_CONTEXT: TReceiveChannelContext = {
  receiveChannel: null,
  onUpdateReceiveChannel: VOIDOP,
};

export const CONTEXT: TContext = {
  ...CONNECTION_CONTEXT,
  ...ACTIVE_STREAM_CONTEXT,
  ...RECEIVE_CHANNEL_CONTEXT,
  ...LOGS_CONTEXT,
};

import { VOIDOP } from '@constants/functions';
import type { TContext } from './types';
import { CONNECTION_CONTEXT } from '@pages/kino/config';

const SEND_CHANNEL_KEY = 'sendChannel';

const LOGS_CONTEXT = {
  logs: [],
  onLog: VOIDOP,
};

export const CONTEXT: TContext = {
  ...CONNECTION_CONTEXT,
  sendChannel:
    CONNECTION_CONTEXT.connection.createDataChannel(
      SEND_CHANNEL_KEY,
    ),
  ...LOGS_CONTEXT,
};

import type { TContext } from './types';
import {
  CONNECTION_CONTEXT,
  LOGS_CONTEXT,
  RECEIVE_CHANNEL_CONTEXT,
  STATUS_CONTEXT,
} from '@pages/kino/config';

const SEND_CHANNEL_KEY = 'sendChannel';
const sendChannel =
  CONNECTION_CONTEXT.connection.createDataChannel(
    SEND_CHANNEL_KEY,
  );
sendChannel.binaryType = 'arraybuffer';
export const CONTEXT: TContext = {
  ...CONNECTION_CONTEXT,
  ...STATUS_CONTEXT,
  ...RECEIVE_CHANNEL_CONTEXT,
  sendChannel,
  ...LOGS_CONTEXT,
};

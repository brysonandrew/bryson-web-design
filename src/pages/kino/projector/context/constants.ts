import type { TContext } from './types';
import {
  CONNECTION_CONTEXT,
  LOGS_CONTEXT,
} from '@pages/kino/config';

const SEND_CHANNEL_KEY = 'sendChannel';
const sendChannel =
  CONNECTION_CONTEXT.connection.createDataChannel(
    SEND_CHANNEL_KEY,
  );
export const CONTEXT: TContext = {
  ...CONNECTION_CONTEXT,
  sendChannel,
  ...LOGS_CONTEXT,
};

import type { TContext } from './types';
import {
  CONNECTION_CONTEXT,
  LOGS_CONTEXT,
  STATUS_CONTEXT,
} from '@pages/kino/config';

export const CONTEXT: TContext = {
  ...CONNECTION_CONTEXT,
  ...STATUS_CONTEXT,
  ...LOGS_CONTEXT,
};

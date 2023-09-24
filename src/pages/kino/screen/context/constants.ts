import { TContext } from './types';
import {
  CONNECTION_CONTEXT,
  LOGS_CONTEXT,
  STATUS_CONTEXT,
} from '@pages/kino/config';

export const CONTEXT = {
  ...CONNECTION_CONTEXT,
  ...STATUS_CONTEXT,
  ...LOGS_CONTEXT,
  videoRef: { current: null },
} as TContext;

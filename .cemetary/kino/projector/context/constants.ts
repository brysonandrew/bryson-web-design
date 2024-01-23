import type { TContext } from '@brysonandrew/color/types';
import {
  CONNECTION_CONTEXT,
  LOGS_CONTEXT,
  STATUS_CONTEXT,
} from '@pages/_workshop/kino/config';

export const CONTEXT = {
  ...CONNECTION_CONTEXT,
  ...STATUS_CONTEXT,
  ...LOGS_CONTEXT,
} as TContext;

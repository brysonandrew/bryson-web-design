import { NOOP } from '@brysonandrew/utils/functions';
import type { TContext } from './types';

export const CONTEXT: TContext = {
  extras: {},
  setExtras: NOOP,
};

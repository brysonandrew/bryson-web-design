import type { TContext } from './types';
import { NOOP } from '@brysonandrew/base/constants/functions';

export const CONTEXT: TContext = {
  context: new AudioContext(),
  isSound: false,
  toggleSound: NOOP,
};

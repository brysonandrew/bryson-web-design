import type { TContext } from './types';
import { NOOP } from '@lib/constants/functions';

export const CONTEXT: TContext = {
  context: new AudioContext(),
  isSound: false,
  toggleSound: NOOP,
};

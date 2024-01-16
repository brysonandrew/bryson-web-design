import type { TContext } from './types';
import { NOOP } from '@lib/constants/functions';
import { INIT_CONTACT_STATE } from '../config/constants';

export const CONTEXT: TContext = {
  ...INIT_CONTACT_STATE,
  onFocus: NOOP,
  onForm: NOOP,
  onStatus: NOOP,
};

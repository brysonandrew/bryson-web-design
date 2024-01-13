import { INIT_CONTACT_STATE } from '@pages/contact/config';
import type { TContext } from './types';
import { NOOP } from '@lib/constants/functions';

export const CONTEXT: TContext = {
  ...INIT_CONTACT_STATE,
  onFocus: NOOP,
  onForm: NOOP,
  onStatus: NOOP,
};

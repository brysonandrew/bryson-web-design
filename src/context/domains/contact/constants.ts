import { INIT_CONTACT_STATE } from '@pages/contact/config';
import type { TState, TAction, TContext } from './types';

export const STATE: TState = {
  contact: INIT_CONTACT_STATE,
};

export const CONTEXT: TContext = {
  ...STATE,
  dispatch: (_: TAction) => null,
};

import { EMPTY_SCREENS_LOOKUP } from '@constants/media';
import type { TState, TAction, TContext } from './types';

export const STATE: TState = {
  buildImages: [],
};

export const CONTEXT: TContext = {
  ...STATE,
  randomIndicies: [],
  screensLookupSmall: EMPTY_SCREENS_LOOKUP,
  dispatch: (_: TAction) => null,
};

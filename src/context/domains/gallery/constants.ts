import { EMPTY_SCREENS_LOOKUP } from '@constants/media';
import type { TState, TAction, TContext } from './types';

export const STATE: TState = {
  isTransitioningGallery: false,
  projectImageRecord: {},
};

export const CONTEXT: TContext = {
  ...STATE,
  projectImageResolverRecord: {},
  screensLookup: EMPTY_SCREENS_LOOKUP,
  dispatch: (_: TAction) => null,
};

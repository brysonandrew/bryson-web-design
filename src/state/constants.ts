import { INIT_CONTACT_STATE } from '@pages/contact/config';
import type { TState, TAction, TContext } from './types';
import { motionValue } from 'framer-motion';
import { EMPTY_SCREENS_LOOKUP } from '@constants/media';
import { INIT } from '@hooks/style/useDarkMode';

export const CURSOR_KEYS = ['React', ''];

export const STATE: TState = {
  isOffline: false,
  isInit: true,
  isCursorReady: false,
  isScrolling: false,
  isScroll: false,
  isSound: false,
  isTransitioningGallery: false,
  hoverKey: null,
  context: new AudioContext(),
  projectImageRecord: {},
  contact: INIT_CONTACT_STATE,
  buildImages: [],
};

export const CONTEXT: TContext = {
  ...STATE,
  darkMode: INIT,
  randomIndicies: [],
  screensLookup: EMPTY_SCREENS_LOOKUP,
  screensLookupSmall: EMPTY_SCREENS_LOOKUP,
  projectImageResolverRecord: {},
  offsetRef: { current: { x: 1, y: 1 } },
  scroll: { x: motionValue(0), y: motionValue(0) },
  cursorLabel: { x: motionValue(0), y: motionValue(0) },
  cursor: { x: motionValue(0), y: motionValue(0) },
  dispatch: (_: TAction) => null,
};

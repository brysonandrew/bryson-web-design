import { INIT_CONTACT_STATE } from '@pages/contact/config';
import type { TState } from './types';

export const STATE: TState = {
  isInit: true,
  isScroll: false,
  isScrollStart: false,
  isCursorReady: false,
  isSound: true,
  isTransitioningGallery: false,
  context: new AudioContext(),
  selectId: null,
  mode:
    //"instant",
    'stagger',
  isThreshold: false,
  motionValuePairs: [],
  images: [],
  clientImageRecord: {},
  contact: INIT_CONTACT_STATE
};

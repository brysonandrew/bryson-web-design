import { INIT_CONTACT_STATE } from '@pages/contact/config';
import type { TState } from './types';

export const STATE: TState = {
  isInit: true,
  isScroll: false,
  isScrollStart: false,
  isSound: false,
  isTransitioningGallery: false,
  context: new AudioContext(),
  projectImageRecord: {},
  contact: INIT_CONTACT_STATE,
  buildImages: [],
};

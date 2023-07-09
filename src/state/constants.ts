import { INIT_CONTACT_STATE } from '@pages/contact/config';
import type { TState } from './types';

export const STATE: TState = {
  isInit: true,
  isScroll: false,
  isScrollStart: false,
  isSound: true,
  isTransitioningGallery: false,
  context: new AudioContext(),
  projectImageRecord: {},
  contact: INIT_CONTACT_STATE
};

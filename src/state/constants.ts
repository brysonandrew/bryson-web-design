import { INIT_CONTACT_STATE } from '@pages/contact/config';
import type { TState } from './types';

export const CURSOR_KEYS = ["React",""]

export const STATE: TState = {
  isInit: true,
  isScroll: false,
  isSound: false,
  isTransitioningGallery: false,
  cursorKey: null,
  context: new AudioContext(),
  projectImageRecord: {},
  contact: INIT_CONTACT_STATE,
  buildImages: [],
};

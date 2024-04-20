import { motionValue } from 'framer-motion';
import {
  TScrollState,
  TScrollContext,
} from '@brysonandrew/motion-scroll/config/types';

export const INIT_SCROLL = 200;
export const SCROLL_COOLDOWN = 200;

export const INIT_SCROLL_STATE: TScrollState = {
  isScrolling: false,
  isScroll: false,
};

export const INIT_SCROLL_CONTEXT: TScrollContext = {
  ...INIT_SCROLL_STATE,
  scroll: { x: motionValue(0), y: motionValue(0) },
};

import { NOOP } from '@constants/functions';
import type { TContext } from './types';

export const CONTEXT: TContext = {
  isTransitioningGallery: false,
  screensRecord: {},
  onDrag: NOOP,
  onMotionBlurStart: NOOP,
  onMotionBlurEnd: NOOP,
};

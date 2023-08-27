import { INIT } from '@hooks/window/useViewport';
import type { TContext } from './types';

export const CONTEXT: TContext = {
  ...INIT,
  isVertical: false,
  halfHeight: 0,
  halfWidth: 0,
};

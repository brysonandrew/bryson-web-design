import { THoverKey } from '@lib/cursor/hooks/config';
import type { TState, TContext, THover } from './types';
import { motionValue } from 'framer-motion';
import { Fragment } from 'react';

export const STATE: TState = {
  isCursorReady: false,
  hoverKey: null,
  children: null,
  hoverKeyParts: [],
  cursorKey: null,
};

export const CONTEXT: TContext = {
  ...STATE,
  onHoverKey: (_: THover) => null,
  onCursorReady: (_: boolean) => null,
  offsetRef: { current: { x: 1, y: 1 } },
  cursorLabel: { x: motionValue(0), y: motionValue(0) },
  cursor: { x: motionValue(0), y: motionValue(0) },
  Background: Fragment,
};

import { THoverKey } from '@hooks/cursor/config';
import { TOffsetRef } from '@hooks/cursor/useCursorOffset';
import { TMotionPoint } from '@t/animation';
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from 'react';

export type TState = {
  isCursorReady: boolean;
  hoverKey: THoverKey;
};

export type TContext = TState & {
  offsetRef: TOffsetRef;
  cursor: TMotionPoint;
  cursorLabel: TMotionPoint;
  onHoverKey: (hoverKey: THoverKey) => void;
  onCursorReady: (setCursorReady: boolean) => void;
};

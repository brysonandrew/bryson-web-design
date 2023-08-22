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
  dispatch: TDispatch;
};

export type TAction =
| {
  type: 'cursor-ready';
  value: boolean;
}
| {
  type: 'hover-key';
  value: THoverKey;
}

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

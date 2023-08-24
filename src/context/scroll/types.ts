import { TMotionPoint } from '@t/animation';
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from 'react';

export type TState = {
  isScrolling: boolean;
  isScroll: boolean;
};

export type TContext = TState & {
  scroll: TMotionPoint;
  dispatch: TDispatch;
};

export type TAction =
  | {
      type: 'scroll';
      value: boolean;
    }
  | {
      type: 'scrolling';
      value: boolean;
    };

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

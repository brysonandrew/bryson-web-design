import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from "react";

export type TContext = TState & {
  dispatch: TDispatch;
};

export type TAction =
  | {
      type: "threshold-reached";
      value: null;
    }
  | {
      type: "threshold-lost";
      value: null;
    };

export type TState = {
  isThreshold: boolean;
};

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

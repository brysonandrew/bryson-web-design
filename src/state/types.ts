import type { MotionValue } from "framer-motion";
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from "react";

export type TContext = TState & {
  dispatch: TDispatch;
};

export type TMotionValuePair = [
  x: MotionValue,
  y: MotionValue,
];

export type TAction =
| {
  type: "cursor-ready";
  value: null
}
  | {
      type: "add-motion-value";
      value: { pair: TMotionValuePair; index: number };
    }
  | {
      type: "threshold-reached";
      value: null;
    }
  | {
      type: "threshold-lost";
      value: null;
    };

export type TState = {
  isCursorReady: boolean
  mode: "instant" | "stagger";
  isThreshold: boolean;
  motionValuePairs: TMotionValuePair[];
};

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

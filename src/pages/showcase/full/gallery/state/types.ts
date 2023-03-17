import { TMedia } from "@pages/showcase/config";
import type { MotionValue } from "framer-motion";
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
  MutableRefObject,
} from "react";

export type TContext = TState & {
  items: TMedia[];
  scrollArea: HTMLDivElement;
  posRef: MutableRefObject<{left:number,top:number}>
  dispatch: TDispatch;
};

export type TMotionValuePair = [
  x: MotionValue,
  y: MotionValue,
];

export type TAction = {
  type: "";
  value: null;
};

export type TState = {
  zoom: number;
  parentOffset: number;
};

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

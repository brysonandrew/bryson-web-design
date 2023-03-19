import { TMedia } from "@pages/showcase/config";
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
  MutableRefObject,
} from "react";

export type TPos = { left: number; top: number };

export type TState = {
  zoom: number;
  offset: number;
};

export type TContext = TState & {
  items: TMedia[];
  count: number;
  pageCount: number;
  scrollArea: HTMLDivElement;
  posRef: MutableRefObject<TPos>;
  dispatch: TDispatch;
};

export type TAction = {
  type: "";
  value: null;
};

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

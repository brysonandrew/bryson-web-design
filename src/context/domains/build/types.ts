import { TMediaRecord } from '@t/media';
import {
  TScreensLookup,
  TProjectImageResolverRecord,
} from '@t/screens';
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from 'react';

export type TState = {
  buildImages: TMediaRecord[];
};

export type TContext = TState & {
  randomIndicies: number[];
  screensLookupSmall: TScreensLookup;
  dispatch: TDispatch;
};

export type TUpdateBuildImageRecord = {
  index: number;
  mediaRecord: TMediaRecord;
};
export type TAction = {
  type: 'build-image-record';
  value: TUpdateBuildImageRecord;
};

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

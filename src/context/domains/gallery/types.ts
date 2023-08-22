import { TProjectKey } from '@constants/projects';
import { TFilePathKey, TMediaRecord } from '@t/media';
import {
  TProjectImageRecord,
  TProjectImageResolverRecord,
  TScreensLookup,
} from '@t/screens';
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from 'react';

export type TState = {
  isTransitioningGallery: boolean;
  projectImageRecord: TProjectImageRecord;
};

export type TContext = TState & {
  screensLookup: TScreensLookup;
  projectImageResolverRecord: TProjectImageResolverRecord;
  dispatch: TDispatch;
};

export type TUpdateProjectImageRecord = {
  project: TProjectKey;
  filePath: TFilePathKey;
  mediaRecord: TMediaRecord;
};
export type TAction =
  | {
      type: 'project-image-record';
      value: TUpdateProjectImageRecord;
    }
  | {
      type: 'gallery-drag';
      value: boolean;
    }
  | {
      type: 'start-motion-blur';
      value: null;
    }
  | {
      type: 'end-motion-blur';
      value: null;
    };

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

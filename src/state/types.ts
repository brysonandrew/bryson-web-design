import { TProjectKey } from '@constants/projects';
import {
  TContactState,
  TFormKey,
  TStatus,
} from '@pages/contact/config';
import { TMotionValuePair } from '@t/animation';
import { TFilePathKey, TMediaRecord } from '@t/media';
import {
  TPartialProjectImageRecord,
  TProjectImageRecord,
  TProjectImageResolverRecord,
  TScreensLookup,
} from '@t/screens';
import type { MotionValue } from 'framer-motion';
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from 'react';

export type TState = {
  projectImageRecord: TProjectImageRecord;
  buildImages: TMediaRecord[];
  isScroll: boolean;
  isScrollStart: boolean;
  isInit: boolean;
  isSound: boolean;
  isTransitioningGallery: boolean;
  context: AudioContext;
  contact: TContactState;
};

export type TContext = TState & {
  randomIndicies: number[];
  screensLookup: TScreensLookup;
  screensLookupSmall: TScreensLookup;
  projectImageResolverRecord: TProjectImageResolverRecord;

  scrollX: MotionValue;
  scrollY: MotionValue;

  dispatch: TDispatch;
};

export type TUpdateBuildImageRecord = {
  index: number;
  mediaRecord: TMediaRecord;
};

export type TUpdateProjectImageRecord = {
  project: TProjectKey;
  filePath: TFilePathKey;
  mediaRecord: TMediaRecord;
};

export type TAction =
  | {
      type: 'build-image-record';
      value: TUpdateBuildImageRecord;
    }
  | {
      type: 'project-image-record';
      value: TUpdateProjectImageRecord;
    }
  | {
      type: 'gallery-drag';
      value: boolean;
    }
  | {
      type: 'contact-status';
      value: TStatus;
    }
  | {
      type: 'contact-form';
      value: Partial<TContactState>;
    }
  | {
      type: 'contact-focus';
      value: TFormKey | null;
    }
  | {
      type: 'start-motion-blur';
      value: null;
    }
  | {
      type: 'end-motion-blur';
      value: null;
    }
  | {
      type: 'init';
      value: null;
    }
  | {
      type: 'scroll';
      value: boolean;
    }
  | {
      type: 'scroll-start';
      value: boolean;
    }
  | {
      type: 'toggle-sound';
      value: null;
    }
  | {
      type: 'select-id';
      value: null | string;
    }
  | {
      type: 'cursor-ready';
      value: boolean;
    }
  | {
      type: 'add-motion-value';
      value: { pair: TMotionValuePair; index: number };
    };

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

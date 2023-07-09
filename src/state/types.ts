
import { TContactState, TFormKey, TStatus } from '@pages/contact/config';
import { TMotionValuePair } from '@t/animation';
import { TMediaRecord } from '@t/media';
import { TScreensCountRecord, TPartialProjectImageRecord, TProjectImageRecord, TScreensLookup } from '@t/screens';
import type { MotionValue } from 'framer-motion';
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from 'react';

export type TState = {
  images: TMediaRecord[];
  projectImageRecord: TProjectImageRecord;
  isScroll: boolean;
  isScrollStart: boolean;
  isInit: boolean;
  isCursorReady: boolean;
  isSound: boolean;
  isTransitioningGallery: boolean;
  context: AudioContext;
  selectId: null | string;
  motionValuePairs: TMotionValuePair[];
  contact: TContactState;
};

export type TContext = TState & {
  randomIndicies: number[];
  screensCountRecord: TScreensCountRecord;
  screensLookup: TScreensLookup;
  screensLookupSmall: TScreensLookup;

  scrollX: MotionValue;
  scrollY: MotionValue;

  dispatch: TDispatch;
};

export type TAction =
  | {
    type: "image-add",
    value: TMediaRecord;
  }
  | {
    type: "gallery-drag",
    value: boolean;
  }
  | {
    type: "contact-status",
    value: TStatus;
  }
  | {
    type: "contact-form",
    value: Partial<TContactState>;
  }
  | {
    type: "contact-focus",
    value: TFormKey | null;
  }
  | {
    type: "image-record",
    value: TPartialProjectImageRecord;
  }
  | {
    type: "images",
    value: TMediaRecord[];
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
    value: { pair: TMotionValuePair; index: number; };
  };

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

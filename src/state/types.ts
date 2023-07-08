
import { TContactState, TFormKey, TStatus } from '@pages/contact/config';
import { TMediaRecord } from '@pages/projects/config';
import type { MotionValue } from 'framer-motion';
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from 'react';

export type TScreensCountRecord = Record<string, number>;
export type TScreensRecord = Record<string, () => Promise<unknown>>;

export type TContext = TState & {
  scrollX: MotionValue;
  scrollY: MotionValue;
  screensCountRecord: TScreensCountRecord;
  screensRecord: TScreensRecord;
  images: TMediaRecord[];
  dispatch: TDispatch;
};

export type TMotionValuePair = [
  x: MotionValue,
  y: MotionValue,
];

export type TImageRecord = Record<string, TMediaRecord>;
export type TClientImageRecord = Record<string, TImageRecord>;
export type TPartialClientImageRecord = { [key: string]: TImageRecord; };

export type TAction =
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
    value: TPartialClientImageRecord;
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

export type TState = {
  images: TMediaRecord[];
  clientImageRecord: TClientImageRecord;
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

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

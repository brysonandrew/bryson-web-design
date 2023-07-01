import { TMedia } from '@pages/showcase/config';
import { TModule } from '@t/index';
import type { MotionValue } from 'framer-motion';
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from 'react';

export type TContext = TState & {
  images: TModule[];
  dispatch: TDispatch;
};

export type TMotionValuePair = [
  x: MotionValue,
  y: MotionValue,
];

export type TImageRecord = Record<string, TMedia>;
export type TClientImageRecord = Record<string, TImageRecord>;

export type TAction =
  | {
    type: "update-image-record",
    value: Partial<TClientImageRecord>;
  }
  | {
    type: "images",
    value: TModule[];
  }
  | {
    type: 'start-page-transition';
    value: null;
  }
  | {
    type: 'end-page-transition';
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
  }
  | {
    type: 'threshold-reached';
    value: null;
  }
  | {
    type: 'threshold-lost';
    value: null;
  };

export type TState = {
  images: TModule[];
  clientImageRecord: TClientImageRecord;
  isScroll: boolean;
  isScrollStart: boolean;
  isInit: boolean;
  isCursorReady: boolean;
  isSound: boolean;
  context: AudioContext;
  selectId: null | string;
  mode: 'instant' | 'stagger';
  isThreshold: boolean;
  motionValuePairs: TMotionValuePair[];
};

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

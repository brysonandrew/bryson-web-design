import { TProjectKey } from '@constants/projects';
import { THoverKey } from '@hooks/cursor/config';
import { TOffsetRef } from '@hooks/cursor/useCursorOffset';
import { TUseDarkMode } from '@hooks/style/useDarkMode';
import {
  TContactState,
  TFormKey,
  TStatus,
} from '@pages/contact/config';
import { TMotionPoint } from '@t/animation';
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
  isOffline: boolean;
  isCursorReady: boolean;
  projectImageRecord: TProjectImageRecord;
  buildImages: TMediaRecord[];
  isScrolling: boolean;
  isScroll: boolean;
  isInit: boolean;
  isSound: boolean;
  isTransitioningGallery: boolean;
  hoverKey: THoverKey;
  context: AudioContext;
  contact: TContactState;
};

export type TContext = TState & {
  darkMode: TUseDarkMode;

  randomIndicies: number[];
  screensLookup: TScreensLookup;
  screensLookupSmall: TScreensLookup;
  projectImageResolverRecord: TProjectImageResolverRecord;

  offsetRef: TOffsetRef;
  scroll: TMotionPoint;
  cursor: TMotionPoint;
  cursorLabel: TMotionPoint;

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
      type: 'cursor-ready';
      value: boolean;
    }
  | {
      type: 'hover-key';
      value: THoverKey;
    }
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
      value?: null;
    }
  | {
      type: 'offline';
      value?: null;
    }
  | {
      type: 'online';
      value?: null;
    }
  | {
      type: 'scroll';
      value: boolean;
    }
  | {
      type: 'scrolling';
      value: boolean;
    }
  | {
      type: 'toggle-sound';
      value: null;
    }
  | {
      type: 'cursor-ready';
      value: boolean;
    };

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

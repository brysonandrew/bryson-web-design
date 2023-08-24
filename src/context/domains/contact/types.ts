import { TContactState, TStatus, TFormKey } from '@pages/contact/config';
import { TMotionPoint } from '@t/animation';
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from 'react';

export type TState = {
  contact: TContactState;

};

export type TContext = TState & {
  dispatch: TDispatch;
};

export type TAction =
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
};

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;

import {
  TDivMotionProps,
  TDivProps,
} from '@brysonandrew/config-types';
import {
  TWithDark,
  TWithDarkMotion,
} from '@brysonandrew/dark-mode';
import { FC } from 'react';

export type TBlankProps = TWithDark<TDivProps>;
export type TBlankC = FC<TBlankProps>;

export type TBlankMotionProps =
  TWithDarkMotion<TDivMotionProps>;
export type TBlankMotionC = FC<TBlankMotionProps>;

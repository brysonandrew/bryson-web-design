import {
  TBlankMotionProps,
  TBlankProps,
} from '@brysonandrew/layout/blank/config/types';
import { FC } from 'react';

export type TBackBaseProps = {
  positionClassValue?: 'fill' | 'fill-screen' | 'relative';
};

export type TBackProps = TBlankProps & TBackBaseProps;
export type TBackC = FC<TBackProps>;

export type TBackMotionProps = TBlankMotionProps &
  TBackBaseProps;
export type TBackMotionC = FC<TBackMotionProps>;

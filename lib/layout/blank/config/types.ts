import { TDivMotionProps, TDivProps } from '@brysonandrew/config';
import { TWithDark } from '@brysonandrew/dark-mode';
import { FC } from 'react';

export type TBlankProps = TWithDark<TDivProps>;
export type TBlankC = FC<TBlankProps>;

export type TBlankMotionProps = TWithDark<TDivMotionProps>;
export type TBlankMotionC = FC<TBlankMotionProps>;

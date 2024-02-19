import {
  TDivProps,
  TDivMotionProps,
} from '@brysonandrew/config-types';
import { TPartialGlowConfigOptions } from '@brysonandrew/filter-animate';
import { FC } from 'react';

export type TGlowProps = TDivProps &
  TPartialGlowConfigOptions;
export type TGlowC = FC<TGlowProps>;

export type TGlowMotionProps = TDivMotionProps &
  TPartialGlowConfigOptions;
export type TGlowMotionC = FC<TGlowMotionProps>;

export type TUGlowProps = TGlowProps | TGlowMotionProps;

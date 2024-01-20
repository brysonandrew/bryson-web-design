import {
  TGlowProps,
  TBrightenProps,
} from '@brysonandrew/filter-animate';
import {
  TDivMotionProps,
  TClassValueProps,
} from '@brysonandrew/base';
import { FC } from 'react';

export type TBlankProps = TDivMotionProps &
  TClassValueProps;

export type TBlank = FC<TBlankProps>;

export type TLayoutRecord = {
  Blank: TBlank;
  Texture: TBlank;
  Active: TBlank;
  TextureGlow: FC<TGlowProps>;
  Glow: FC<TGlowProps>;
  GlowSecondaryAccent: FC<TGlowProps>;
  Brighten: FC<TBrightenProps>;
};
export type TPartialLayoutRecord = Partial<TLayoutRecord>;

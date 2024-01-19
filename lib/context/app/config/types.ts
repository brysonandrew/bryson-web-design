import { TBrightenProps } from '@brysonandrew/animation/components/filter-animate/Brighten';
import { TGlowProps } from '@brysonandrew/animation/components/filter-animate/Glow';
import {
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/base/types/dom';
import { FC, Context } from 'react';
import { TColorSetRecord } from '../hooks/useColorSetRecord';
import { STYLE } from '../style';

export type TStyle = typeof STYLE;

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

export type TAppConfig<S extends TStyle = TStyle> =
  Partial<TLayoutRecord> & S;

export type TValue<S extends TStyle = TStyle> =
  TLayoutRecord &
    TColorSetRecord &
    TAppConfig<S> & {
      isInit: boolean;
      onInit(): void;
    };

export type TAppContext<S extends TStyle = TStyle> =
  Context<TValue<S>>;

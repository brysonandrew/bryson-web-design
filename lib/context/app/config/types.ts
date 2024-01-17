import { STYLE } from '@app/style';
import { TBrightenProps } from '@lib/animation/components/filter-animate/Brighten';
import { TGlowProps } from '@lib/animation/components/filter-animate/Glow';
import {
  TClassValueProps,
  TDivMotionProps,
} from '@lib/types/dom';
import { FC, Context } from 'react';
import { TColorSetRecord } from '../hooks/useColorSetRecord';

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

export type TContext<S extends TStyle = TStyle> = Context<
  TValue<S>
>;

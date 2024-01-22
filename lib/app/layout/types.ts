import { TDefaultStyle } from '@brysonandrew/app/config/types';
import {
  TGlowProps,
  TBrightenProps,
} from '@brysonandrew/filter-animate';
import {
  TDivMotionProps,
  TClassValueProps,
} from '@brysonandrew/types';
import { FC } from 'react';

export type TBlankProps = TDivMotionProps &
  TClassValueProps;

export type TBlank = FC<TBlankProps>;

export type TInitLayoutRecord = {
  Glow: FC<TGlowProps>;
};

export type TCoreLayoutRecord = {
  Blank: TBlank;
  Back: TBlank;
  Brighten: FC<TBrightenProps>;
};

export type TLayoutRecord = {
  Glow?: {
    Marker: TBlank;
    Back: FC<TGlowProps>;
    Shell: FC<TGlowProps>;
  };
};

export type TLayoutRecordProps =
  Partial<TInitLayoutRecord> & Partial<TCoreLayoutRecord>;
export type TLayoutRecordValue = TCoreLayoutRecord &
  TLayoutRecord;

export type TLayoutComponentProps = TInitLayoutRecord &
  TCoreLayoutRecord &
  TDefaultStyle;

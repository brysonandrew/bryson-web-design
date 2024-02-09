import { TDefaultStyle } from '@brysonandrew/app/config/types';
import { FC } from 'react';
import {
  DEFAULT_BLANK,
  DEFAULT_BACK,
  DEFAULT_EFFECTS,
} from '@brysonandrew/app/config/constants';
import { TWithLight } from '@brysonandrew/layout';
import { TFadeVProps } from '@brysonandrew/fade-edge/pairs/FadeV';

export type TDefaultBlankRecord = typeof DEFAULT_BLANK;
export type TDefaultBackRecord = typeof DEFAULT_BACK;
export type TDefaultEffectsRecord = typeof DEFAULT_EFFECTS;

type TDefaultU = TDefaultBackRecord &
  TDefaultBlankRecord &
  Pick<TDefaultEffectsRecord, 'Brighten'>;

export type TInitLayoutRecord = Pick<
  TDefaultEffectsRecord,
  'Glow'
>;

export type TCoreLayoutRecord = TDefaultU & {
  FadeV: FC<TFadeVProps>;
};

export type TLayoutRecord = {
  LIGHT?: TWithLight;
};

export type TLayoutRecordProps =
  Partial<TInitLayoutRecord> & Partial<TCoreLayoutRecord>;
export type TLayoutRecordValue = TCoreLayoutRecord &
  TLayoutRecord;

export type TLayoutComponentProps = TInitLayoutRecord &
  TCoreLayoutRecord &
  TDefaultStyle;

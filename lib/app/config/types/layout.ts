import { TDefaultStyle } from '@brysonandrew/app/config/types';
import { FC } from 'react';
import {
  DEFAULT_BLANKS,
  DEFAULT_BACKS,
  DEFAULT_EFFECTS,
  DEFAULT_LAYOUT,
  DEFAULT_CONFIG,
} from '@brysonandrew/app/config/constants';

import { TWithLight } from '@brysonandrew/layout';
import { TFadeVProps } from '@brysonandrew/fade-edge/pairs/FadeV';
import { TAnyRecord } from '@brysonandrew/config-types';

export type TDefaultBlanksRecord = typeof DEFAULT_BLANKS;
export type TDefaultBacksRecord = typeof DEFAULT_BACKS;
export type TDefaultEffectsRecord = typeof DEFAULT_EFFECTS;
export type TDefaultLayoutRecord = typeof DEFAULT_LAYOUT;
export type TDefaultConfigRecord = typeof DEFAULT_CONFIG;

type TDefaultU = TDefaultBacksRecord &
  TDefaultBlanksRecord &
  TDefaultEffectsRecord;

export type TInitLayoutRecord = TAnyRecord;

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

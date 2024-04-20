import { BASE_RGBS_RECORD, resolveColorRecords } from '@brysonandrew/color-base';
import { resolveGlowRecord, BASE_GLOW_RECORD } from '@brysonandrew/color-glow';
import { BLACK_RGBS, WHITE_RGBS } from '@brysonandrew/color-grayscale';
import {
  OPACITY_RANGE_RGB_RECORD,
  VARIABLES_RECORD,
} from './config/constants';
import { TVariablesRecord } from './config/types';


const RGB_RECORD = {
  ...OPACITY_RANGE_RGB_RECORD,
  ...BASE_RGBS_RECORD,
  dark: BLACK_RGBS[2],
  light: WHITE_RGBS[8],
  primary: '45, 212, 191',
  secondary: '207, 250, 254',
  accent: '113, 174, 225',
} as const;

type TRgbRecord = typeof RGB_RECORD;

const {
  colorRecord,
  colorCssVariablesRecord,
  colorVarsCss,
  opacityRangeColorRecord,
} = resolveColorRecords<TRgbRecord, TVariablesRecord>(
  RGB_RECORD,
  VARIABLES_RECORD,
);

export const COLOR_RECORD = colorRecord;
export const COLOR_VARS_RECORD = colorCssVariablesRecord;
export const COLOR_VARS_CSS = colorVarsCss;
export const COLOR_SHADE_RECORD = opacityRangeColorRecord;
const CUSTOM_GLOW_RECORD = resolveGlowRecord(
  OPACITY_RANGE_RGB_RECORD,
);

export const GLOW_DROP = {
  ...BASE_GLOW_RECORD.drop,
  ...CUSTOM_GLOW_RECORD.drop,
};
export const GLOW_BOX = {
  ...BASE_GLOW_RECORD.box,
  ...CUSTOM_GLOW_RECORD.box,
};

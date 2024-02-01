import {
  OPACITY_RANGE_RGB_RECORD,
  VARIABLES_RECORD,
} from './constants';
import {
  TOpacityRangeRgbRecord,
  TVariablesRecord,
} from './types';
import {
  BASE_GLOW_RECORD,
  resolveColorRecords,
  resolveGlowRecord,
} from '@brysonandrew/color';

const {
  colorRecord,
  colorCssVariablesRecord,
  colorVarsCss,
  opacityRangeColorRecord,
} = resolveColorRecords<
  TOpacityRangeRgbRecord,
  TVariablesRecord
>(OPACITY_RANGE_RGB_RECORD, VARIABLES_RECORD);

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

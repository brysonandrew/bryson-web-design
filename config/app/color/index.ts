import {
  OPACITY_RANGE_RGB_RECORD,
  VARIABLES_RECORD,
} from './constants';
import {
  TOpacityRangeRgbRecord,
  TVariablesRecord,
} from './types';
import { resolveColorRecords } from '@brysonandrew/color';

const {
  colorRecord,
  colorCssVariablesRecord,
  colorVarsCss,
  opacityRangeColorRecord,
  glowRecord,
} = resolveColorRecords<
  TOpacityRangeRgbRecord,
  TVariablesRecord
>(OPACITY_RANGE_RGB_RECORD, VARIABLES_RECORD);

export const COLOR_RECORD = colorRecord;
export const COLOR_VARS_RECORD =
  colorCssVariablesRecord;
export const COLOR_VARS_CSS = colorVarsCss;
export const COLOR_SHADE_RECORD = opacityRangeColorRecord;
export const GLOW_DROP = glowRecord.drop;
export const GLOW_BOX = glowRecord.box;

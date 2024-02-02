import {
  COLOR_RECORD,
  COLOR_VARS_RECORD,
} from '@app/color';
import {
  OPACITY_RANGE_RGB_RECORD,
  VARIABLES_RECORD,
} from '@app/color/constants';

export type TColorRecord = typeof COLOR_RECORD;
export type TColorVarsRecord = typeof COLOR_VARS_RECORD;
export type TColorKey =
  | keyof TColorRecord
  | keyof TColorVarsRecord;
export type TOpacityRangeRgbRecord =
  typeof OPACITY_RANGE_RGB_RECORD;
export type TVariablesRecord = typeof VARIABLES_RECORD;

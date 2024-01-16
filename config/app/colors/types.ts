import {
  COLOR_RECORD,
  COLOR_VARS_RECORD,
} from './constants';

export type TColorRecord = typeof COLOR_RECORD;
export type TColorVarsRecord = typeof COLOR_VARS_RECORD;
export type TColorKey =
  | keyof TColorRecord
  | keyof TColorVarsRecord;
export type TColorValue =
  | TColorRecord[TColorKey]
  | TColorVarsRecord[TColorKey];

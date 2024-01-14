import {
  COLOR_RECORD,
  COLOR_VARS_RECORD,
} from './constants';

export type TColorKey = keyof typeof COLOR_RECORD;
export type TColorVarsRecordKey =
  keyof typeof COLOR_VARS_RECORD;

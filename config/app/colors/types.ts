import { COLOR_RECORD, COLOR_CSS_VARS_RECORD } from "./constants";

export type TColorRecord = typeof COLOR_RECORD;
export type TColorVarsRecord = typeof COLOR_CSS_VARS_RECORD;
export type TColorKey =
  | keyof TColorRecord
  | keyof TColorVarsRecord;

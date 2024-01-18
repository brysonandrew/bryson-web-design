import { BASE_COLOR_RECORD } from 'lib/color/constants';

export type TDigit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type TRgb = `${number}, ${number}, ${number}`;
export type TRgbValue = `rgb(${TRgb})`;
export type TRgbs = TRgb[];
export type TRgba = `${TRgb}, 0.${number}`;
export type TRgbaValue = `rgba(${TRgba})` | TRgbValue;

export type TColorRecordKey<T extends string> =
  | `${T}-${TDigit}`
  | T;

export type TOpacityRangeRecordKey<T extends string> =
  | `${T}-0${TDigit}`
  | T;

export type TBaseColorKey = keyof TBaseColorRecord;
export type TBaseColorRecord = typeof BASE_COLOR_RECORD;

export type TCssVar<V extends string = string> =
  `var(--${V})`;

export type TBaseVarColorRecord = Record<string, TCssVar>;

export type TColorRgbKey<K extends string> = K | string;

export type TColorVariablesLookup<K extends string> =
  Record<TColorRgbKey<K>, string>;

export type TColorRecord<K extends string> = Record<
  TColorRgbKey<K>,
  string | TRgbValue
>;
export type TColorVarRecord<K extends string> = Record<
  TColorRgbKey<K>,
  TCssVar
>;
export type TRgbRecordKey<K extends string> =
  TColorRecordKey<K>;

export type TRgbRecord<K extends string> = Record<
  TRgbRecordKey<K>,
  TRgb
>;

import {
  BASE_COLOR_RECORD,
  BASE_GLOW_RECORD,
  RGBA_DELIMITER,
  INDICIES,
  DIGITS,
} from './constants';

export type TIndicies = typeof INDICIES;
export type TIndex = TIndicies[number];

export type Digits = typeof DIGITS;
export type TDigit = Digits[number];

export type TRgbaDelimiter = typeof RGBA_DELIMITER;

export type TRgb =
  `${number}${TRgbaDelimiter}${number}${TRgbaDelimiter}${number}`;

export type TRgbGrayscale<N extends number = number> =
  `${N}${TRgbaDelimiter}${N}${TRgbaDelimiter}${N}`;

export type TRgbValue = `rgb(${TRgb})`;
export type TRgbValues = TRgbValue[];
export type TRgbs = TRgb[];
export type TRgba<O extends TDigit> =
  `${TRgb}${TRgbaDelimiter}0.${O}`;

export type TColorValue = string | TRgbaValue | TRgbValue;
export type TRgbaValue<O extends number = number> =
  O extends TDigit ? `rgba(${TRgba<O>})` : TRgbValue;

export type TRgbSeriesRecordKey<T extends string> =
  | `${T}-${TDigit}`
  | T;

export type TOpacityRangeRecordKey<T extends string> =
  | `${T}-0${TDigit}`
  | T;

export type TBaseColorKey = keyof TBaseColorRecord;
export type TBaseColorRecord = typeof BASE_COLOR_RECORD;

export type TBaseGlowKey = keyof TBaseGlowRecord;
export type TBaseGlowRecord = typeof BASE_GLOW_RECORD;

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

export type TRgbValueRecord<K extends string> = Record<
  TColorRgbKey<K>,
  TRgbValue
>;

export type TColorVarRecord<K extends string> = Record<
  TColorRgbKey<K>,
  TCssVar
>;

export type TRgbRecord<K extends string> = Record<
  TRgbSeriesRecordKey<K>,
  TRgb
>;

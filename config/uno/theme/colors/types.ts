import { COLOR_LOOKUP, COLOR_RGB_RECORD } from '.';

export type TDigit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type TColorLookupKey = keyof typeof COLOR_LOOKUP;
export type TColorKey = TColorLookupKey;

export type TColorRecordKey<T extends string> =
  | `${T}-${TDigit}`
  | T;

export type TOpacityRangeRecordKey<T extends string> =
  | `${T}-0${TDigit}`
  | T;

export type TRgb = `${number}, ${number}, ${number}`;
export type TRgbValue = `rgb(${TRgb})`;
export type TRgbs = TRgb[];
export type TRgba = `${TRgb}, 0.${number}`;
export type TRgbaValue = `rgba(${TRgba})` | TRgbValue;

export type TCssVar = `var(--${string})`;

export type TColorVariablesLookup = Record<
  TColorKey,
  string
>;

export type TColorRgbKey = keyof typeof COLOR_RGB_RECORD;

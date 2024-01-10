import {
  COLOR_RGB_RECORD,
  COLOR_VARIABLES_LOOKUP,
} from '.';

export type TColorKey =
  | Extract<
      keyof (keyof typeof COLOR_VARIABLES_LOOKUP),
      string
    >
  | string;

export type TRgb = `${number}, ${number}, ${number}`;
export type TRgbs = TRgb[];
export type TRgba = `${TRgb}, ${number}`;

export type TColorVariablesLookup = Record<
  TColorKey,
  string
>;

export type TColorRgbKey = keyof typeof COLOR_RGB_RECORD;

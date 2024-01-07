import { COLOR_RGB_RECORD } from '@app/colors';
import { TColorKey } from './css';

export type TRgb = `${number}, ${number}, ${number}`;
export type TRgba = `${TRgb}, ${number}`;

export type TColorVariablesLookup = Record<
  TColorKey,
  string
>;

export type TColorRgbKey = keyof typeof COLOR_RGB_RECORD;

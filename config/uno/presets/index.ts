import { presetWebFonts, type Preset } from 'unocss';
import {
  resolveWebFont,
  withDarkModePreset,
  TWebFonts,
} from '@brysonandrew/uno-presets';
import { FONTS } from './fonts';

const fonts = FONTS.reduce((a, c) => {
  const record = resolveWebFont(c);
  return { ...a, ...record };
}, {} as TWebFonts);

export type TPresets<T extends object> = (
  | Preset<T>
  | Preset<T>[]
)[];
export const resolvePresets = <
  T extends object,
>(): TPresets<T> =>
  withDarkModePreset([presetWebFonts({ fonts })]);

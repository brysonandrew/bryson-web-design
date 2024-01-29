import { FONTS } from '../../app/fonts';
import {
  definePreset,
  presetUno,
  presetWebFonts,
  type Preset,
} from 'unocss';

export type TPresets<T extends object> = (
  | Preset<T>
  | Preset<T>[]
)[];
export const resolvePresets = <
  T extends object,
>(): TPresets<T> => [
  definePreset<T>(
    presetUno({ dark: 'class' }) as unknown as Preset<T>,
  ),
  presetWebFonts({
    fonts: FONTS,
  }),
];

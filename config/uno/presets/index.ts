import { FONTS } from '../../app/fonts';
import {
  definePreset,
  presetUno,
  presetWebFonts,
  type Preset,
} from 'unocss';
import { TTheme } from '../theme';

export type TPresets = (
  | Preset<TTheme>
  | Preset<TTheme>[]
)[];
export const PRESETS: TPresets = [
  definePreset<any>(presetUno({ dark: 'class' })),
  presetWebFonts({
    fonts: FONTS,
  }),
];

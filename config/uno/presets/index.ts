import {
  definePreset,
  presetUno,
  presetWebFonts,
  type Preset,
} from 'unocss';
import { TAnyTheme, TTheme } from '../theme';
import { SANS, MONO } from '../typography';
import { ICONS } from './icons';

export type TPresets = (
  | Preset<TTheme>
  | Preset<TTheme>[]
)[];
export const PRESETS: TPresets = [
  definePreset<TAnyTheme>(presetUno({ dark: 'class' })),
  presetWebFonts({
    fonts: {
      sans: SANS,
      mono: MONO,
    },
  }),
  ICONS,
];

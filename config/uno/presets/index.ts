import {
  definePreset,
  presetUno,
  presetWebFonts,
  type Preset,
} from 'unocss';
import { TAnyTheme, TTheme } from '../theme';
import { MONO, SERIF } from '../typography';
import { ICONS } from './icons';

export type TPresets = (
  | Preset<TTheme>
  | Preset<TTheme>[]
)[];
export const PRESETS: TPresets = [
  definePreset<TAnyTheme>(presetUno({ dark: 'class' })),
  presetWebFonts({
    fonts: {
      serif: {
        name: SERIF,
        provider: 'google',
      },
      mono: {
        name: MONO,
        provider: 'google',
      },
    },
  }),
  ICONS,
];

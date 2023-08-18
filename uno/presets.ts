import { definePreset, presetUno, presetWebFonts, type Preset } from 'unocss';
import { TAnyTheme, TTheme } from './theme';
import { SANS, MONO } from './typography';

export const PRESETS: (
  | Preset<TTheme>
  | Preset<TTheme>[]
)[] = [
  definePreset<TAnyTheme>(presetUno({ dark: 'class' })),
  presetWebFonts({
    fonts: {
      sans: SANS,
      mono: MONO,
    },
  }),
];

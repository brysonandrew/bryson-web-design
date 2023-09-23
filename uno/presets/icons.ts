import { Preset, definePreset, presetIcons } from 'unocss';
import { TAnyTheme, TTheme } from '../theme';

export const ICONS: Preset<TTheme> = definePreset<TAnyTheme>(
  presetIcons({
    prefix: 'i-',
    extraProperties: {
      display: 'flex',
    },
    collections: {
      mdi: () => import('@iconify/json/json/mdi.json').then((i) => i.default),
      ion: () => import('@iconify/json/json/ion.json').then((i) => i.default),
    },
  }),
);

import { presetWebFonts, type Preset } from 'unocss';
import {
  resolveWebFont,
  withDarkModePreset,
} from '@brysonandrew/uno-presets';

const sans = resolveWebFont({
  key: 'sans',
  name: 'Supreme',
  provider: 'fontshare',
  weights: ['500', '600'],
});
// const mono = resolveWebFont({
//   key: 'display',
//   name: 'ADLaM Display',
//   provider: 'google',
//   weights: ['regular'],
// });
export type TPresets<T extends object> = (
  | Preset<T>
  | Preset<T>[]
)[];
export const resolvePresets = <
  T extends object,
>(): TPresets<T> =>
  withDarkModePreset([
    presetWebFonts({ fonts: { ...sans } }),
  ]);

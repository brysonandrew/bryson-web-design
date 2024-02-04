import {
  definePreset,
  presetUno,
  type Preset,
} from 'unocss';

export type TPresets<T extends object> = (
  | Preset<T>
  | Preset<T>[]
)[];
export const withDarkModePreset = <T extends object>(
  partial: Preset<T>[] = [],
): TPresets<T> => [
  definePreset<T>(
    presetUno({ dark: 'class' }) as unknown as Preset<T>,
  ),
  ...partial,
];

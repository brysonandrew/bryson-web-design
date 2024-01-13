import {
  TBaseColorRgbKey,
  TRgbRecord,
} from '@lib/types/color';

export const resolveColor = <
  K extends TBaseColorRgbKey,
  T extends TRgbRecord<K>,
>(
  color: K,
  opacity: number,
  rgbRecord: T,
) => `rgba(${rgbRecord[color]}, ${opacity})`;

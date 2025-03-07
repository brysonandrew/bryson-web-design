import {
  TDigit,
  TRgbRecord,
  TRgba,
} from '@brysonandrew/color-base/config/types';
import { formatRgba } from './formatRgba';
import { formatRgbaValue } from './formatRgbaValue';

export type TConfig<K extends string> = {
  rgbValueRecord: TRgbRecord<K>;
  colorKey: K;
  opacity: TDigit;
};
export const resolveRgba = <K extends string>({
  rgbValueRecord,
  colorKey,
  opacity,
}: TConfig<K>) => {
  const rgb = rgbValueRecord[colorKey];
  const rgba: TRgba<TDigit> = formatRgba(rgb, opacity);
  const rgbaValue = formatRgbaValue(rgba);
  return rgbaValue;
};

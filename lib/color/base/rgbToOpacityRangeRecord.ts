import { TKeyStr } from '@brysonandrew/config-types/keys';
import { TRgb } from '@brysonandrew/color-base/config/types';
import {
  resolveRgbaOpacityRange,
  TOpacityRangeRecord,
} from './resolveRgbaOpacityRange';

export const rgbToOpacityRangeRecord = <T extends object>(
  rgbRecord: T,
) => {
  type TKey = TKeyStr<T>;
  type TEntry = [TKey, TRgb];
  const entries = Object.entries(rgbRecord) as TEntry[];
  const result = entries.reduce(
    (a, [key, value]: TEntry) => {
      const opacityRange = resolveRgbaOpacityRange<
        typeof key
      >(key, value);
      return {
        ...a,
        ...opacityRange,
      };
    },
    {} as TOpacityRangeRecord<TKey>,
  );

  return result;
};

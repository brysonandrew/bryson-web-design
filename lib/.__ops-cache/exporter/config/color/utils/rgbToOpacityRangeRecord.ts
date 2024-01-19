import { TKeyStr } from '@brysonandrew/base/types/keys';
import { TRgb } from '../types';
import {
  resolveColorOpacityRange,
  TOpacityRangeRecord,
} from './resolveColorOpacityRange';

export const rgbToOpacityRangeRecord = <T extends object>(
  rgbRecord: T,
) => {
  type TKey = TKeyStr<T>;
  type TEntry = [TKey, TRgb];
  const entries = Object.entries(rgbRecord) as TEntry[];
  const result = entries.reduce(
    (a, [key, value]: TEntry) => {
      const opacityRange = resolveColorOpacityRange<
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

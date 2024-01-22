import { TKeyStr } from '@brysonandrew/types/keys';
import { TRgb, TRgbaValue } from '../types';
import { varRgb } from './varRgb';

export const rgbToVarRecord = <T extends object>(
  rgbRecord: T,
) => {
  type TKey = TKeyStr<T>;
  type TEntry = [TKey, TRgb];
  const entries = Object.entries(rgbRecord) as TEntry[];
  const result = entries.reduce(
    (a, [key, value]: TEntry) => {
      const next = varRgb(value);
      return {
        ...a,
        [key]: next,
      };
    },
    {} as Record<TKey, TRgbaValue>,
  );

  return result;
};

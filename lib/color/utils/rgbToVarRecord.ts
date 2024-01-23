import { TKeyStr } from '@brysonandrew/types/keys';
import {
  TRgb,
  TRgbaValue,
} from '@brysonandrew/color/config/types';
import { resolveRgbaValue } from '@brysonandrew/color/utils/resolveRgbaValue';

export const rgbToVarRecord = <T extends object>(
  rgbRecord: T,
) => {
  type TKey = TKeyStr<T>;
  type TEntry = [TKey, TRgb];
  const entries = Object.entries(rgbRecord) as TEntry[];
  const result = entries.reduce(
    (a, [key, value]: TEntry) => {
      const next = resolveRgbaValue(value);
      return {
        ...a,
        [key]: next,
      };
    },
    {} as Record<TKey, TRgbaValue>,
  );

  return result;
};

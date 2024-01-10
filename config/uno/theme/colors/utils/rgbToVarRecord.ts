import { TRgb, TRgbaValue } from '../types';
import { varRgb } from './varRgb';

export const rgbToVarRecord = <T extends string>(
  rgbRecord: Record<T, TRgb>,
) => {
  type TEntry = [T, TRgb];
  const entries = Object.entries(rgbRecord) as TEntry[];
  const result = entries.reduce(
    (a, [key, value]: TEntry) => {
      const next = varRgb(value);
      return {
        ...a,
        [key]: next,
      };
    },
    {} as Record<T, TRgbaValue>,
  );

  return result;
};

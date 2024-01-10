import { TRgb } from '../types';
import { resolveColorOpacityRange } from './resolveColorOpacityRange';

export const rgbToOpacityRangeRecord = <T extends string>(
  rgbRecord: Record<T, TRgb>,
) => {
  type TEntry = [T, TRgb];
  const entries = Object.entries(rgbRecord) as TEntry[];
  const result = entries.reduce(
    (a, [key, value]: TEntry) => {
      const OpacityRange = resolveColorOpacityRange(
        key,
        value,
      );
      return {
        ...a,
        ...OpacityRange,
      };
    },
    {} as ReturnType<typeof resolveColorOpacityRange<T>>,
  );

  return result;
};

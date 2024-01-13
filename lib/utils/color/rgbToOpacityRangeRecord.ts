import { TKeyStr } from '@lib/types/keys';
import { TRgb } from '../../types/color';
import { resolveColorOpacityRange } from './resolveColorOpacityRange';

export const rgbToOpacityRangeRecord = <T extends object>(
  rgbRecord: T,
) => {
  type TKey = TKeyStr<T>;
  type TEntry = [TKey, TRgb];
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
    {} as ReturnType<typeof resolveColorOpacityRange<TKey>>,
  );

  return result;
};

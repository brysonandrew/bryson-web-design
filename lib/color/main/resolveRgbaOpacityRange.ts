import {
  TDigit,
  TOpacityRangeRecordKey,
  TRgb,
  TRgbaValue,
  TRgbValue,
} from '@brysonandrew/color-main/config/types';
import { resolveRgbaValue } from '@brysonandrew/color-main/resolveRgbaValue';

export type TOpacityRangeRecord<
  T extends string,
  O extends TDigit = TDigit,
> = Record<
  TOpacityRangeRecordKey<T>,
  TRgbValue | TRgbaValue<O>
>;
export const resolveRgbaOpacityRange = <T extends string>(
  key: T,
  value: TRgb,
): TOpacityRangeRecord<T> => {
  const result = [...Array(10)].reduce(
    (a: TOpacityRangeRecord<T>, _, index) => {
      if (index === 0) {
        return {
          ...a,
          [key]: resolveRgbaValue(value),
        };
      }
      const next = resolveRgbaValue(value, index as TDigit);
      return {
        ...a,
        [`${key}-0${index}`]: next,
      };
    },
    {} as TOpacityRangeRecord<T>,
  );
  return result;
};

import {
  TOpacityRangeRecordKey,
  TRgb,
  TRgbaValue,
} from '../../types/color';
import { varRgb } from './varRgb';

export type TOpacityRangeRecord<T extends string> = Record<
  TOpacityRangeRecordKey<T>,
  TRgbaValue
>;
export const resolveColorOpacityRange = <T extends string>(
  key: T,
  value: TRgb,
): TOpacityRangeRecord<T> => {
  const result = [...Array(10)].reduce(
    (a: TOpacityRangeRecord<T>, _, index) => {
      if (index === 0) {
        return {
          ...a,
          [key]: varRgb(value),
        };
      }
      const next = varRgb(value, index);
      return {
        ...a,
        [`${key}-0${index}`]: next,
      };
    },
    {} as TOpacityRangeRecord<T>,
  );
  return result;
};

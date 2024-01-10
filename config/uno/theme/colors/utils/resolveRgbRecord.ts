import {
  TColorRecordKey,
  TDigit,
  TRgb,
  TRgbs,
} from '../types';

export type TRgbRecordKey<T extends string> =
  TColorRecordKey<T>;
export type TRgbRecord<T extends string> = Record<
  TRgbRecordKey<T>,
  TRgb
>;
export const resolveRgbRecord = <T extends string>(
  rgbs: TRgbs,
  key: T,
) => {
  return rgbs.reduce((a, c, i) => {
    const recordKey: TRgbRecordKey<T> =
      i === 0 ? key : (`${key}-${i as TDigit}` as const);
    a[recordKey] = c;
    return a;
  }, {} as TRgbRecord<T>);
};

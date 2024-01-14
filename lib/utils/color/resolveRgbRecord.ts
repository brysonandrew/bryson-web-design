import {
  TDigit,
  TRgbRecord,
  TRgbRecordKey,
  TRgbs,
} from '../../types/color';

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

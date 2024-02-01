import { TDigit, TRgbRecord, TRgbs } from '@brysonandrew/color/main/config/types';

export const resolveRgbSeriesRecord = <T extends string>(
  key: T,
  rgbs: TRgbs,
) => {
  return rgbs.reduce((a, c, i) => {
    const recordKey =
      i === 0 ? key : (`${key}-${i as TDigit}` as const);
    a[recordKey] = c;
    return a;
  }, {} as TRgbRecord<T>);
};

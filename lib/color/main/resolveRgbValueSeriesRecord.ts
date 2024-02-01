import {
  TRgbSeriesRecordKey,
  TRgbValue,
  TRgbs,
} from '@brysonandrew/color/main/config/types';
import { formatRgbValue } from './formatRgb';

export type TRgbSeriesKey<T extends string> =
  TRgbSeriesRecordKey<T>;
export type TRgbSeriesRecord<T extends string> = Record<
  TRgbSeriesKey<T>,
  TRgbValue
>;
export const resolveRgbValueSeriesRecord = <
  T extends string,
>(
  key: T,
  series: TRgbs,
): TRgbSeriesRecord<T> => {
  return series.reduce(
    (a, v, index) =>
      v === null
        ? a
        : {
            ...a,
            [index === 0 ? key : `${key}-${index}`]:
              formatRgbValue(v),
          },
    {} as TRgbSeriesRecord<T>,
  );
};

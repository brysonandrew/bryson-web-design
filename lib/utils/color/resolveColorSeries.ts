import {
  TColorRecordKey,
  TRgb,
  TRgbaValue,
} from '../../types/color';
import { varRgb } from './varRgb';

export type TColorSeriesKey<T extends string> =
  TColorRecordKey<T>;
export type TColorSeriesRecord<T extends string> = Record<
  TColorSeriesKey<T>,
  TRgbaValue
>;
type TValue = TRgb | null;
export const resolveColorSeries = <T extends string>(
  key: T,
  series: TValue[],
): TColorSeriesRecord<T> => {
  return series.reduce(
    (a, v, index) =>
      v === null
        ? a
        : {
            ...a,
            [index === 0 ? key : `${key}-${index}`]:
              varRgb(v),
          },
    {} as TColorSeriesRecord<T>,
  );
};

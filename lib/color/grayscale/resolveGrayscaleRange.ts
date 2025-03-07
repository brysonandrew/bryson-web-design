import {
  TIndex,
  TRgbGrayscale,
} from '@brysonandrew/color-base/config/types';
import { resolveGrayscaleRgb } from './resolveGrayscaleRgb';

const COUNT = 9;
export const resolveGrayscaleRange = <M extends number>(
  min: M,
  max: number,
  range = max - min,
  segment = range / COUNT,
): [TRgbGrayscale<M>, ...TRgbGrayscale[]] => [
  resolveGrayscaleRgb<M>(min),
  ...[...Array(COUNT)].map(
    (_, index, { length: count }) => {
      const n = ~~((min +
        segment * ((index + 1) - (1 / count) * index)) as TIndex);
      return resolveGrayscaleRgb<typeof n>(n); // returns range from min to max - max / segment
    },
  ),
];

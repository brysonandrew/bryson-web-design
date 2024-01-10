import { TRgb } from '../colors/types';

const resolveGrayscaleRgb = (value: number) => {
  const result = [...Array(3)]
    .map(() => value)
    .join(', ') as TRgb;
  return result;
};

export const resolveGrayscaleRange = (
  min: number,
  max: number,
  range = max - min,
) =>
  [...Array(10)].map((_, index) =>
    resolveGrayscaleRgb(
      ~~(min + (range * index) / 10 - 1 / 20),
    ),
  );

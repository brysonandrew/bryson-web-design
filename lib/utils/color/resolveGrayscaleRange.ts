import { TRgb } from '../../types/color';

const resolveGrayscaleRgb = (value: number): TRgb => {
  const result = [...Array(3)]
    .map(() => value)
    .join(', ') as TRgb;
  return result;
};

const COUNT = 10;
export const resolveGrayscaleRange = (
  min: number,
  max: number,
  range = max - min,
): TRgb[] =>
  [...Array(COUNT)].map((_, index) =>
    resolveGrayscaleRgb(
      ~~(min + (range * index) / COUNT - 1 / (COUNT * 2)),
    ),
  );

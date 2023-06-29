import { useMemo } from 'react';

export const RANGE_MIN_Y = 10;
export const RANGE_Y = 20;

export const useY = (index: number) => {
  const y = useMemo(
    () =>
      index % 2 === 0
        ? -Math.random() * RANGE_Y - RANGE_MIN_Y
        : Math.random() * RANGE_Y + RANGE_MIN_Y,
    [index],
  );
  return y;
};

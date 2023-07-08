import { useMemo } from 'react';

export const RANGE_Z = 1000;

export const useZ = (y: number) => {
  const z = useMemo(
    () =>
      RANGE_Z * 0.5 +
      ~~(RANGE_Z * 0.5 * Math.random()) / (1 + y / RANGE_Z),
    [y],
  );
  return z;
};

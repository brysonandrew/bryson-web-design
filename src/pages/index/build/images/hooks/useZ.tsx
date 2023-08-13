import { useMemo } from 'react';

export const RANGE_Z = 2000;
const f = 0.9

export const useZ = (y: number) => {
  const z = useMemo(
    () => RANGE_Z * (1 - f) + ~~(RANGE_Z * f * Math.random()),
    [y],
  );
  return z;
};

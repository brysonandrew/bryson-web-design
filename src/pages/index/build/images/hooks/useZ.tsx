import { useMemo } from 'react';

export const RANGE_Z = 1000;

export const useZ = (y: number) => {
  const z = useMemo(
    () => ~~(RANGE_Z * Math.random()) / (1 + y / 1000),
    [y],
  );
  return z;
};

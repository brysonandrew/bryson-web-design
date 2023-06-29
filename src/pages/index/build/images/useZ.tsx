import { useMemo } from 'react';

export const RANGE_MIN_Y = 10;
export const RANGE_Z = 800;

export const useZ = (index: number) => {
  const z = useMemo(
    () =>
      -RANGE_MIN_Y * index -
      RANGE_Z * Math.random() -
      RANGE_Z,
    [],
  );
  return z;
};

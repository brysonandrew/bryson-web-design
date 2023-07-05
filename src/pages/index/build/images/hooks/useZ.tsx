import { useMemo } from 'react';

export const RANGE_Z = 1000;

export const useZ = () => {
  const z = useMemo(() => ~~(RANGE_Z * Math.random()), []);
  return z;
};

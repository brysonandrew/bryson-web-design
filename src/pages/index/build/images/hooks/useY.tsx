import { useMemo } from 'react';

export const RANGE_Y = 200;

export const useY = () => {
  const y = useMemo(() => ~~(Math.random() * RANGE_Y), []);
  return y;
};

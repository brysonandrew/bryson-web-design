import { useMemo } from 'react';

export const RANGE_Y = 240;

export const useY = () => {
  const y = useMemo(() => ~~(Math.random() * RANGE_Y), []);
  return y;
};

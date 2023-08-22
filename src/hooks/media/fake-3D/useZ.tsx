import { useMemo } from 'react';
import { TDepthConfig } from './useDepthStyle';

export const RADIUS_Z = 2000;

type TStyle = {
  z: number;
  rotateY: number;
};

export const useZ = ({ index, count }: TDepthConfig) => {
  const style = useMemo<TStyle>(() => {
    const radians = Math.PI * (index / count);
    return {
      z: Math.cos(radians * 2) * RADIUS_Z,
      rotateY: radians * (180 / Math.PI) + 90,
    };
  }, []);
  return style;
};

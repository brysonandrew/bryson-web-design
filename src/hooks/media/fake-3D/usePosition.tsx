import { useMemo } from 'react';
import { TDepthConfig } from './useDepthStyle';

export const usePosition = ({
  index,
  count,
  imageWidth,
  halfViewportWidth,
}: TDepthConfig & {
  viewportWidth: number;
}) => {
  const progress = index / (count );
  const style = useMemo(() => {
    const start =Math.PI * 0.25;
    const radians = start + Math.PI * 2 * progress;
    return {
      x:
        Math.cos(radians) * halfViewportWidth +
        halfViewportWidth -
        imageWidth * 0.5,
      y: 0,
      z: -Math.sin(radians) * halfViewportWidth,
      rotateY: radians * (180 / Math.PI) + 90,
    };
  }, []);
  return style;
};

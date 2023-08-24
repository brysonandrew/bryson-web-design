import { useContext } from '@context/scroll/Context';
import { useTransform } from 'framer-motion';
const MIN_OPACITY = 0.2;

export type TDepthConfig = {
  name: string | null;
  index: number;
  count: number;
  imageSize: number;
  radius: number;
  isVertical: boolean;
};
export const usePosition = ({
  index,
  count,
  imageSize,
  isVertical,
  radius,
}: TDepthConfig) => {
  const { scroll } = useContext();
  const progress = index / count;

  const radians = useTransform(scroll.y, (v) => {
    return v * 0.002 + Math.PI * 2 * progress;
  });
  const depth = useTransform(radians, (v) => {
    return Math.sin(v);
  });
  const z = useTransform(depth, (v) => {
    return (
      -v * radius + (isVertical ? 0 : -imageSize - radius)
    );
  });
  const opacity = useTransform(depth, (v) => {
    return MIN_OPACITY + (1 - v * (1 - MIN_OPACITY));
  });
  const spread = useTransform(radians, (v) => {
    return (
      Math.cos(v) * radius * (isVertical ? 0.6 : 1) +
      (isVertical ? -imageSize * 0.25 : -imageSize * 0.5)
    );
  });
  const rotation = useTransform(radians, (v) => {
    return v * (180 / Math.PI) + 90;
  });

  const style = isVertical
    ? {
        x: imageSize * 0.5,
        y: spread,
        z,
        rotateX: rotation,
        rotateY: 0,
        opacity,
      }
    : {
        x: spread, // ,
        y: 0,
        z,
        rotateX: 0,
        rotateY: rotation,
        opacity,
      };
  return style;
};

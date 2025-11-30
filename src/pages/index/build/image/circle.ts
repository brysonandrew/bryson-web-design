import { MotionValue, useTransform } from 'framer-motion';
const MIN_OPACITY = 0.6;

export type TPositionConfig = {
  index: number;
  count: number;
  imageSize: number;
  radius: number;
  isVertical: boolean;
  spin: MotionValue;
};
export const useCircle = ({
  index,
  count,
  imageSize,
  isVertical,
  radius,
  spin,
}: TPositionConfig) => {
  const progress = index / count;

  const radians = useTransform(spin, (v) => {
    return v + Math.PI * 2 * progress;
  });
  const depth = useTransform(radians, (v) => {
    return Math.sin(v);
  });
  const z = useTransform(depth, (v) => {
    return (
      -v * radius +
      (isVertical ? -1000 : -imageSize - radius)
    );
  });
  const opacity = useTransform(depth, (v) => {
    const offset = 1 + MIN_OPACITY;
    const next = offset - (v + offset) * 0.5;
    return next * 0.4;
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
        rotateX: rotation,
        rotateY: 0,
      }
    : {
        x: spread,
        y: 0,
        rotateX: 0,
        rotateY: rotation,
      };
  return { ...style, z, opacity };
};

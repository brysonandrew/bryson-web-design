import {
  MotionValue,
  useMotionTemplate,
  useTransform,
} from 'framer-motion';
import { TBaseConfig, TVisibilityRange } from '../config';

export const useVisibility = ({
  scrollY,
  input,
  blur: blurRange,
  grayscale: grayscaleRange,
  opacity: opacityRange,
  ...inputConfig
}: TBaseConfig & TVisibilityRange) => {
  const inputRange = input(inputConfig);
  const blur = useTransform(
    scrollY,
    inputRange,
    blurRange ?? inputRange,
  );
  const grayscale = useTransform(
    scrollY,
    inputRange,
    grayscaleRange ?? inputRange,
  );
  const opacity = useTransform(
    scrollY,
    inputRange,
    opacityRange ?? inputRange,
  );
  const template = [
    blurRange && {
      blur,
      resolver: (v: MotionValue) => `blur(${v}px)`,
    },
    grayscaleRange && {
      grayscale,
      resolver: (v: MotionValue) => `grayscale(${v}%)`,
    },
    opacityRange && {
      opacity,
      resolver: (v: MotionValue) => `opacity(${v})`,
    },
  ];
  const path = template.join(' ');
  const visibility = useMotionTemplate`${path}`;

  return visibility;
};

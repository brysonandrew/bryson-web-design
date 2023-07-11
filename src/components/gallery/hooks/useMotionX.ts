import { useMotionValue } from 'framer-motion';
import { TInitXConfig, useInitX } from './useInitX';

type TConfig = TInitXConfig;
export const useMotionX = (config: TConfig) => {
  const initX = useInitX(config);
  const motionX = useMotionValue(initX);
  return motionX;
};

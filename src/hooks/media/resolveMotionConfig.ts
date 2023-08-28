import { resolveDynamicMidMotionConfig } from '@constants/animation';

type TConfig = {
  index: number;
  count: number;
};
export const resolveMotionConfig = ({
  index,
  count,
}: TConfig) => {
  const resolveDelay = () => {
    // if (name) {
    //   const n = Number(name);
    //   if (!isNaN(n)) {
    //     return Math.abs(index - n) / count;
    //   }
    // }
    return (index / count) * 0.5;
  };
  const delay = resolveDelay();
  const motionConfig = resolveDynamicMidMotionConfig({
    delay,
  });
  return motionConfig;
};

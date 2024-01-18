import { resolveDynamicMidMotionConfig } from '@brysonandrew/lib/animation/constants';

type TConfig = {
  index: number;
  count: number;
};
export const resolveMotionConfig = ({
  index,
  count,
}: TConfig) => {
  const resolveDelay = () => {
    return (index / count) * 0.5;
  };
  const delay = resolveDelay();
  const motionConfig = resolveDynamicMidMotionConfig({
    delay,
  });
  return motionConfig;
};

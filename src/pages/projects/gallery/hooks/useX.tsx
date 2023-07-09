import { TMediaRecord } from '@t/media';
import { resolveX } from './resolveX';
import { MotionValue } from 'framer-motion';

type TConfig = {
  motionX: MotionValue;
  currName: string | null;
  items: TMediaRecord[];
  width: number;
};
export const useX = ({
  motionX,
  currName,
  items,
  width,
}: TConfig) => {
  const activeIndex = items.findIndex(
    ({ png: { name } }) => name === currName,
  );
  const x =
    activeIndex < 0
      ? motionX.get()
      : resolveX({
          activeIndex,
          width,
          count: items.length,
        });
  return x;
};

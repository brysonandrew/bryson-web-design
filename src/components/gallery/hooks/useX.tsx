import { resolveX } from './resolveX';
import { TBaseProps } from '../types';

type TConfig = Pick<TBaseProps, 'items' | 'motionX'> & {
  currName: string | null;
  width: number;
};
export const useX = ({
  motionX,
  currName,
  items,
  width,
}: TConfig) => {
  const activeIndex = items.findIndex(
    ([_, item]) => item.png.name === currName,
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

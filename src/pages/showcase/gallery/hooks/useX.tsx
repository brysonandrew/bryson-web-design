import type { TMediaRecord } from '@pages/showcase/config';
import { resolveX } from './resolveX';

type TConfig = {
  currName: string | null;
  items: TMediaRecord[];
  width: number;
};
export const useX = ({
  currName,
  items,
  width,
}: TConfig) => {
  const activeIndex = Math.max(
    items.findIndex(
      ({ png: { name } }) => name === currName,
    ),
    0,
  );

  const x = resolveX({
    activeIndex,
    width,
    count: items.length,
  });
  return x;
};

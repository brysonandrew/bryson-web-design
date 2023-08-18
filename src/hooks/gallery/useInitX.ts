import { useCurrName } from '@hooks/params/useCurrName';
import { TImageResolverEntries } from '@t/screens';
import { resolveX } from '@utils/gallery/resolveX';
import { useMemo } from 'react';

export type TInitXConfig = {
  width: number;
  items: TImageResolverEntries;
};
export const useInitX = ({
  width,
  items,
}: TInitXConfig) => {
  const currName = useCurrName();

  const result = useMemo(() => {
    const currIndex = items.findIndex(([_, config]) => {
      const name = config.png.name;
      return name === currName;
    });

    const x = resolveX({
      activeIndex: currIndex,
      width,
      count: items.length,
    });
    return x;
  }, []);

  return result;
};

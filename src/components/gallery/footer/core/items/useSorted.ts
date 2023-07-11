import { useMemo } from 'react';
import { TImageRecordEntries, TImageResolverEntries } from '@t/screens';

export const useSorted = (items: TImageRecordEntries | TImageResolverEntries) => {
  const results = useMemo(() => {
    return items.sort(([_, a], [__, b]) => {
      const an = +a.png.name;
      const bn = +b.png.name;

      if (an < bn) {
        return -1;
      }
      if (bn < an) {
        return 1;
      }
      return 0;
    });
  }, [items]);
  return results;
};

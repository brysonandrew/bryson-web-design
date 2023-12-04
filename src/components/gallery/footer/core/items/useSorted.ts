import { useMemo } from 'react';
import {
  TMediaRecord,
  TMediaRecords,
} from 'ops/types/media';

export const useSorted = (mediaRecords: TMediaRecords) => {
  const results = useMemo(() => {
    return mediaRecords.sort(
      (a: TMediaRecord, b: TMediaRecord) => {
        const an = +a.name;
        const bn = +b.name;

        if (an < bn) {
          return -1;
        }
        if (bn < an) {
          return 1;
        }
        return 0;
      },
    );
  }, [mediaRecords]);
  return results;
};

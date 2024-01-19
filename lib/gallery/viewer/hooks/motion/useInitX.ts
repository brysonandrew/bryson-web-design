import { useCurrName } from '@brysonandrew/gallery/viewer/hooks/params/useCurrName';
import {
  TMediaRecord,
  TMediaRecords,
} from '@brysonandrew/media/picture/config/types';
import { resolveX } from '@brysonandrew/gallery/viewer/utils/resolveX';
import { useMemo } from 'react';

export type TInitXConfig = {
  width: number;
  mediaRecords: TMediaRecords;
};
export const useInitX = ({
  width,
  mediaRecords,
}: TInitXConfig) => {
  const currName = useCurrName();

  const result = useMemo(() => {
    const currIndex = mediaRecords.findIndex(
      (mediaRecord: TMediaRecord) => {
        const name = mediaRecord.name;
        return name === currName;
      },
    );

    const x = resolveX({
      activeIndex: currIndex,
      width,
      count: mediaRecords.length,
    });
    return x;
  }, []);

  return result;
};

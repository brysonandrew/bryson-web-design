import { useCurrName } from '@hooks/params/useCurrName';
import {
  TMediaRecord,
  TMediaRecords,
} from 'ops/types/media';
import { resolveX } from '@pages/projects/gallery/utils/resolveX';
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

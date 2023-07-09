import { useEffect, useState } from 'react';
import { TMediaRecord, TModuleRecord } from '@t/media';
import { resolveMediaRecord } from '@pages/projects/config';

type TSmallImageConfig = TModuleRecord;
export const useMediaRecord = (
  moduleRecord: TSmallImageConfig,
) => {
  const [mediaRecord, setMediaRecord] =
    useState<TMediaRecord | null>(null);

  useEffect(() => {
    const init = async () => {
      const value = await resolveMediaRecord(moduleRecord);
      setMediaRecord(value);
    };
    init();
  }, []);

  return mediaRecord;
};

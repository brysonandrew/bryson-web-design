import { useEffect, useState } from 'react';
import {
  TMediaRecord,
  TModuleConfig,
  TModuleRecord,
} from '@t/media';
import { resolveMediaRecord } from '@pages/projects/config';
import { TImageRecordValue } from '@t/screens';

type TConfig = TImageRecordValue;
export const useMediaRecord = (config: TConfig) => {
  const [mediaRecord, setMediaRecord] =
    useState<TMediaRecord | null>(null);

  useEffect(() => {
    const init = async () => {
      if ((config.png as TModuleConfig).resolver) {
        const value = await resolveMediaRecord(
          config as TModuleRecord,
        );
        setMediaRecord(value);
      }
    };
    init();
  }, [config]);

  return mediaRecord;
};

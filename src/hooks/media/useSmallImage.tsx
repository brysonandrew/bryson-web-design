import { useEffect, useState } from 'react';
import { useContext } from '@state/Context';
import { resolveCountRequired } from './resolveCountRequired';
import { resolveMediaRecordByIndex } from './resolveMediaRecordByIndex';
import { TMediaRecord } from '@t/media';

type TSmallImageConfig = { index: number };
export const useSmallImage = ({
  index,
}: TSmallImageConfig) => {
  const [mediaRecord, setMediaRecord] =
    useState<TMediaRecord | null>(null);
  const { screensLookupSmall } = useContext();

  useEffect(() => {
    const init = async () => {
      const value = await resolveMediaRecordByIndex({
        index,
        screensLookup: screensLookupSmall,
      });
      setMediaRecord(value);
    };
    init();
  }, []);

  return mediaRecord;
};

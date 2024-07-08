import {
  PropsWithChildren,
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react';
import type { FC } from 'react';
import allRecords from '../../../screens/build/lookup-320w.json';
const allRecordsCount = allRecords.length;

import {
  TMediaRecord,
  TMediaRecords,
} from '@brysonandrew/media/config/types';
import { TContext } from './types';

const Build = createContext<TContext>({} as TContext);

export const useHomeBuild = (): TContext =>
  useContext<TContext>(Build);

export const BuildProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [records, setRecords] = useState<TMediaRecords>([]);

  const isDuplicateCheck = (record: TMediaRecord) =>
    records.some(({ src }) => src === record.src);

  const resolveRandomUnique = () => {
    let result: TMediaRecord | null = null;
    let i = 0;
    while (result === null && i < allRecordsCount) {
      const randomIndex = ~~(
        Math.random() * allRecordsCount
      );
      const next = allRecords[randomIndex];
      if (next && !isDuplicateCheck(next)) {
        result = next;
      }
      i++;
    }

    return result;
  };

  useEffect(() => {
    const initScreens = async () => {
      const SIZE = 8;
      const next: TMediaRecords = [];
      [...Array(SIZE)].forEach((_) => {
        const randomUnique = resolveRandomUnique();
        if (randomUnique) {
          next.push(randomUnique);
        }
      });
      setRecords(next);
    };

    initScreens();
  }, []);

  const replaceRecord = (src: string) => {
    setRecords(
      (prevs) =>
        prevs?.map((prev) =>
          prev.src === src
            ? resolveRandomUnique() ?? prev
            : prev
        ) ?? []
    );
  };

  return (
    <Build.Provider
      value={{
        records,
        updateRecords: setRecords,
        replaceRecord,
      }}
    >
      {children}
    </Build.Provider>
  );
};

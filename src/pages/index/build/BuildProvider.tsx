import {
  PropsWithChildren,
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react';
import type { FC } from 'react';
import allRecords from '../../../screens/build/lookup-320w.json';
import { TMediaRecords } from '@brysonandrew/media/config/types';
import { TContext } from './config/types';

const Build = createContext<TContext>({} as TContext);

export const useBuild = (): TContext =>
  useContext<TContext>(Build);

export const BuildProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [records, setRecords] =
    useState<TMediaRecords | null>(null);

  useEffect(() => {
    const initScreens = async () => {
      if (
        'serviceWorker' in navigator &&
        !import.meta.env.DEV
      ) {
        const sw: ServiceWorkerContainer =
          navigator.serviceWorker;
        sw.ready.then((registration) => {
          if (!registration.active) return null;
          registration.active.postMessage({
            type: 'init-screens',
            records: allRecords,
            from: 'PROVIDER',
          });
        });
        sw.onmessage = (event) => {
          if (event.data.type === 'init-screens') {
            setRecords(event.data.records);
          }
        };
        sw.onmessageerror = (event) => {
          console.error(event);
        };
      } else {
        const count = allRecords.length;
        const SIZE = 8;
        const start = ~~(Math.random() * (count - SIZE));
        const next = (allRecords as TMediaRecords).slice(
          start,
          start + SIZE,
        );
        setRecords(next);
      }
    };

    initScreens();
  }, []);

  return (
    <Build.Provider
      value={{
        records,
      }}
    >
      {children}
    </Build.Provider>
  );
};

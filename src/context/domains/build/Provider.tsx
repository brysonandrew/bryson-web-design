import { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { resolveRandomIndicies as _resolveRandomIndicies } from '@hooks/media/resolveRandomIndicies';
import { Build } from '.';
import { TMediaRecords } from '@ops/screens/types/media';
import allRecords from './lookup-320w.json';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const [records, setRecords] =
    useState<TMediaRecords | null>(null);

  useEffect(() => {
    const initScreens = async () => {
      if ('serviceWorker' in navigator) {
        const sw: ServiceWorkerContainer =
          navigator.serviceWorker;
        sw.ready.then((registration) => {
          if (!registration.active) return null;
          registration.active.postMessage({
            type: 'init-screens',
            records: allRecords as TMediaRecords,
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
        setRecords(
          (allRecords as TMediaRecords).slice(0, 8),
        );
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

import { useMemo, useReducer } from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import type { TChildrenElement } from '@t/index';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';
import { PNG_EXT, WEBP_EXT } from '@constants/media';
import { resolveRandomIndicies } from '@hooks/media/resolveRandomIndicies';
import { TScreensRecord } from '@t/screens';

const screensRecordSmallPng: TScreensRecord =
  import.meta.glob(
    '/screens/**/+([0-9]|!(*[a-z]*)[0-9])-sm.png',
  );
const screensSmallCount = Object.keys(
  screensRecordSmallPng,
).length;

const screensRecordSmallWebp: TScreensRecord =
  import.meta.glob(
    '/screens/**/+([0-9]|!(*[a-z]*)[0-9])-sm.webp',
  );

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
  });

  const randomIndicies = useMemo(
    () => resolveRandomIndicies(screensSmallCount),
    [screensSmallCount],
  );

  // useEffect(() => {
  //   const sw: ServiceWorkerContainer =
  //     navigator.serviceWorker;
  //   sw.onmessage = (event) => {
  //     // if (event.data.type === 'random-indicies') {
  //     //   console.log(event.data);
  //     // }
  //   };
  //   sw.onmessageerror = (event) => {
  //     console.log('MESSAGE ERROR', event);
  //   };
  // }, []);
  return (
    <Context.Provider
      value={{
        screensLookupSmall: {
          [PNG_EXT]: screensRecordSmallPng,
          [WEBP_EXT]: screensRecordSmallWebp,
        },
        randomIndicies,
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

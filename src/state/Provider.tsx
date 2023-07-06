import { useReducer } from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';
import { useDetectGPU } from '@react-three/drei';
import type { TChildrenElement } from '@t/index';
import { resolveScreensCountRecord } from '@hooks/media/resolveScreenCountRecord';

const screensRecord = import.meta.glob(
  '/screens/**/+([0-9]|!(*[a-z]*)[0-9]).(png|webp)',
);

const screensCountRecord =
  resolveScreensCountRecord(screensRecord);

  type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const { isMobile } = useDetectGPU();
  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
    isSound: !isMobile,
  });

  return (
    <Context.Provider
      value={{
        dispatch,
        screensRecord,
        screensCountRecord,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

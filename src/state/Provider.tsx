import { useReducer } from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';
import type { TChildrenElement } from '@t/index';
import { resolveScreensCountRecord } from '@hooks/media/resolveScreenCountRecord';
import { isMobile } from 'react-device-detect';
import { useScroll } from 'framer-motion';

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
  const { scrollX, scrollY } = useScroll();

  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
    isSound: !isMobile,
  });

  return (
    <Context.Provider
      value={{
        screensRecord,
        screensCountRecord,
        scrollX,
        scrollY,
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

import { useEffect, useReducer } from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';
import { useDetectGPU } from '@react-three/drei';
import type { TChildrenElement } from '@t/index';
import { useImages } from '@pages/index/build/images/hooks/useImages';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const images = useImages();
  const { isMobile } = useDetectGPU();

  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
    isSound: !isMobile,
  });

  useEffect(() => {
    dispatch({ type: 'init', value: null });
  }, []);

  return (
    <Context.Provider
      value={{
        dispatch,
        images,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

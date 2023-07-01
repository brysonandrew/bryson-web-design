import { useEffect, useReducer } from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';
import { useDetectGPU } from '@react-three/drei';
import type { TChildrenElement } from '@t/index';
import {
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { SELECTED_KEY } from '@pages/showcase/config';

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
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

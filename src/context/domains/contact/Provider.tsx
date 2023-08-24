import { useReducer } from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import type { TChildrenElement } from '@t/index';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
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

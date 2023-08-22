import { useReducer } from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import type { TChildrenElement } from '@t/index';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';
import { useScroll } from 'framer-motion';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const { scrollX, scrollY } = useScroll();
  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
  });
  return (
    <Context.Provider
      value={{
        scroll: { x: scrollX, y: scrollY },
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

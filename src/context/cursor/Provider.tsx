import { useReducer, useRef } from 'react';
import type { FC } from 'react';
import type { TReducer } from './types';
import type { TChildrenElement } from '@t/index';
import { reducer } from '.';
import { Context } from './Context';
import { STATE } from './constants';
import { useMotionValue } from 'framer-motion';
import { TCursorOffset } from '@hooks/cursor/useCursorOffset';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const offsetRef = useRef<TCursorOffset>({
    x: 1,
    y: -1,
  });
  const cursorLabelX = useMotionValue(0);
  const cursorLabelY = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [state, dispatch] = useReducer<TReducer>(reducer, {
    ...STATE,
  });
  return (
    <Context.Provider
      value={{
        offsetRef,
        cursor: { x: cursorX, y: cursorY },
        cursorLabel: {
          x: cursorLabelX,
          y: cursorLabelY,
        },
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

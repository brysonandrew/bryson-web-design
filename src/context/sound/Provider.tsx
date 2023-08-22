import { useState, type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Context } from './Context';
import { CONTEXT } from './constants';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const [isSound, setSound] = useState(CONTEXT.isSound);

  return (
    <Context.Provider
      value={{
        context: CONTEXT.context,
        isSound,
        toggleSound: () => setSound(!isSound),
      }}
    >
      {children}
    </Context.Provider>
  );
};

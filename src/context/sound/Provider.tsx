import { useState, type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Sound } from '.';
import { CONTEXT } from './constants';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const [isSound, setSound] = useState(CONTEXT.isSound);

  return (
    <Sound.Provider
      value={{
        context: CONTEXT.context,
        isSound,
        toggleSound: () => setSound(!isSound),
      }}
    >
      {children}
    </Sound.Provider>
  );
};

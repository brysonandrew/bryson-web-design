import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { ServicesC } from '.';
import { TExtrasRecord } from './types';
import { useLocalStorage } from '@hooks/dom/useLocalStorage';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const [extras, setExtras] =
    useLocalStorage<TExtrasRecord>('extras', {});

  return (
    <ServicesC.Provider
      value={{
        extras,
        setExtras,
      }}
    >
      {children}
    </ServicesC.Provider>
  );
};

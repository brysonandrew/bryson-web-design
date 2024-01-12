import type { FC, PropsWithChildren } from 'react';
import { ServicesC } from '.';
import { TExtrasRecord } from './types';
import { useLocalStorage } from '@hooks/dom/useLocalStorage';

export const Provider: FC<PropsWithChildren> = ({
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

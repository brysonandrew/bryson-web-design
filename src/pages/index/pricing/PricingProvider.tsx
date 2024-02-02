import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { TExtrasRecord, TPricingContext } from './config/types';
import { useLocalStorage } from '@brysonandrew/hooks-dom/useLocalStorage';
import { NOOP } from '@brysonandrew/utils';

export const PRICING = createContext<TPricingContext>({
  extras: {},
  setExtras: NOOP,
});

export const usePricing = (): TPricingContext =>
  useContext<TPricingContext>(PRICING);


export const PricingProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [extras, setExtras] =
    useLocalStorage<TExtrasRecord>('extras', {});

  return (
    <PRICING.Provider
      value={{
        extras,
        setExtras,
      }}
    >
      {children}
    </PRICING.Provider>
  );
};

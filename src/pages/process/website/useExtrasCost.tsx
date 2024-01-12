import { useServicesC } from '@pages/index/pricing/context/useServicesC';
import { EXTRAS, TExtraConfig } from './config';

export const useExtrasCost = () => {
  const { extras } = useServicesC();
  const extrasCost = EXTRAS.reduce(
    (a, [key, price, max]: TExtraConfig) => {
      const value = extras[key];
      const isValue = Boolean(value);
      const isN = typeof max === 'number';
      const itemCost = isN
        ? ~~value * price
        : isValue
        ? price
        : 0;
      return a + itemCost;
    },
    0,
  );
  return extrasCost;
};

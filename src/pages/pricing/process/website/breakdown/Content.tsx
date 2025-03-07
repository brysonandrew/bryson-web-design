import { usePricing } from '@pages/index/pricing/PricingProvider';
import { ADDITIONAL_CONTENT, CONTENT_COST } from '@pages/pricing/process/website/config';
import { Item } from './extras/Item';

export const Content = () => {
  const { extras } = usePricing();
  const value = extras[ADDITIONAL_CONTENT];

  return (
    <Item
      id={ADDITIONAL_CONTENT}
      price={CONTENT_COST}
      max={8}
      isN
      value={value}
    />
  );
};

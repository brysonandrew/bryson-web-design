import { useServices } from '@context/domains/services';
import {
  ADDITIONAL_CONTENT,
  CONTENT_COST,
} from '../config';
import { Item } from './extras/Item';

export const Content = () => {
  const { extras } = useServices();
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

import { TInitItems } from '../../config/types';
import { TItemsConfig } from '../hooks/useItemsConfig';

export type TContext<T extends TInitItems = TInitItems> =
  TItemsConfig<T>;

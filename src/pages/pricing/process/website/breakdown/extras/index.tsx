import { useServicesC } from '@pages/index/pricing/context/useServicesC';
import { EXTRAS } from '../../config';
import { Item } from './Item';
import { List } from '@brysonandrew/lib/components/layout/lists/List';

export const Extras = () => {
  const { extras } = useServicesC();
  return (
    <List
      items={EXTRAS.map(([id, price, max], index) => {
        const isN = typeof max === 'number';
        const value = extras[id];
        return {
          key: id,
          children: (
            <Item
              id={id}
              value={value}
              isN={isN}

              price={price}
              max={max}
            />
          ),
        };
      })}
    />
  );
};

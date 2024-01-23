import { useServicesC } from '@pages/index/pricing/context/useServicesC';
import { Item } from './Item';
import { List } from '@brysonandrew/layout/lists/List';
import { EXTRAS } from '../../config';

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

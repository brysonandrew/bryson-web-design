import { useServices } from '@context/domains/services';
import { EXTRAS } from '../../config';
import { Item } from './Item';
import { TickList } from '../../TickList';

export const Extras = () => {
  const { extras } = useServices();
  return (
    <TickList
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

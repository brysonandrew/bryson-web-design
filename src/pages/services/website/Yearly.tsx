import { YEARLY } from './config';
import { Money } from './Money';
import { TickList } from './TickList';

export const Yearly = () => {
  return (
    <>
      <div>Yearly costs</div>
      <TickList
        items={YEARLY.map(([item, price]) => {
          return {
            key: item,
            children: (
              <>
                <span>{item}</span>
                <Money>{price}</Money> p.a.
              </>
            ),
          };
        })}
      />
    </>
  );
};

import { I } from '@components/Icon';
import { EXTRAS } from './config';
import { Money } from './Money';
import { TickList } from './TickList';

export const Extras = () => {
  return (
    <>
      <div>Optional Extras include</div>
      <TickList
        items={EXTRAS.map(([item, price]) => {
          return {
            key: item,
            children: (
              <>
                <span>{item}</span>
                <Money>{price}</Money>
              </>
            ),
          };
        })}
      />
    </>
  );
};

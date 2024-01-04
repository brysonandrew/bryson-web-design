import { I } from '@components/Icon';
import { nToMoney } from '@utils/format';
import { BASE } from './config';
import { Item } from './Item';
import { Money } from './Money';
import { Skeleton } from './skeleton';
import { TickList } from './TickList';

export const Website = () => {
  return (
    <div className='w-full'>
      <div className='row-start gap-2 w-full'>
        <div className='grow column-start gap-4 w-1/3 h-full'>
          <p>
            For <Money>{800}</Money> I will make you a
            website with:
          </p>
          <TickList
            items={BASE.map((item) => {
              return {
                key: item,
                children: (
                  <Item id={item}>
                    <I icon='teenyicons:tick-circle-solid' />
                    {item}
                  </Item>
                ),
              };
            })}
          />
        </div>
        <div className='grow w-2/3'>
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

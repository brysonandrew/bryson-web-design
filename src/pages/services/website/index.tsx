import { P2 } from '@components/space/P2';
import { useServices } from '@context/domains/services';
import { Circle } from './Circle';
import { BASE, EXTRAS, TExtraConfig } from './config';
import { Extras } from './Extras';
import { Item } from './Item';
import { Money } from './Money';
import { Skeleton } from './skeleton';
import { TickList } from './TickList';
import { Underline } from './Underline';
import { useExtrasCost } from './useExtrasCost';

export const Website = () => {
  const baseCost = 800;
  const extrasCost = useExtrasCost();
  return (
    <div className='column gap-8 w-full'>
      <div className='row-start gap-8 w-full'>
        <div className='grow column-start gap-4 w-6/12 h-full'>
          <TickList
            items={BASE.map((item, index) => {
              return {
                key: item,
                children: (
                  <Item id={item}>
                    <Circle>{index + 1}</Circle>
                    {item}
                  </Item>
                ),
              };
            })}
          />
          <div className='row-start-end w-full px-2'>
            <Money prefix={<Underline />}>{baseCost}</Money>
          </div>
          <P2 />
          <Extras />
          <div className='row-start-end w-full px-2'>
            <Money prefix={<Underline />}>
              {extrasCost}
            </Money>
          </div>
          <P2 />
          <div className='row-space w-full px-2'>
            <b className='uppercase font-display'>Total</b>
            <Money prefix={<Underline isDouble />}>
              {baseCost + extrasCost}
            </Money>
          </div>
        </div>
        <div className='grow w-6/12'>
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

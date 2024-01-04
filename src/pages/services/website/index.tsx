import { P2 } from '@components/space/P2';
import { useCursor } from '@context/cursor';
import { Circle } from './Circle';
import { BASE, TOTAL_YEARLY } from './config';
import { Extras } from './Extras';
import { Item } from './Item';
import { Money } from './Money';
import { Skeleton } from './skeleton';
import { TickList } from './TickList';
import { Underline } from './Underline';
import { useExtrasCost } from './useExtrasCost';
import { Yearly } from './Yearly';

export const Website = () => {
  const baseCost = 800;
  const extrasCost = useExtrasCost();
  const {
    hoverKeyParts: [_, first],
  } = useCursor();
  return (
    <div className='column gap-8 h-full w-full'>
      <div className='row-start gap-8 h-full w-full'>
        <div className='grow column-start gap-4 w-6/12 h-full'>
          <TickList
            items={BASE.map((item, index) => {
              return {
                key: item,
                children: (
                  <Item id={item}>
                    <Circle isActive={first === item}>
                      {index + 1}
                    </Circle>
                    {item}
                  </Item>
                ),
              };
            })}
          />
          <div className='row-space w-full text-color-1'>
            <span className='uppercase font-display'>
              base
            </span>
            <Money prefix={<Underline />}>{baseCost}</Money>
          </div>
          <P2 />
          <Extras />
          <div className='row-space w-full text-color-1'>
            <span className='uppercase font-display'>
              extras
            </span>
            <Money prefix={<Underline />}>
              {extrasCost}
            </Money>
          </div>
          <P2 />
          <div className='row-space w-full text-color-1'>
            <b className='uppercase font-display'>Total</b>
            <Money prefix={<Underline isDouble />}>
              {baseCost + extrasCost}
            </Money>
          </div>
          <P2 />
          <Yearly />
          <P2 />
          <div className='row-space w-full text-color-1'>
            <b className='uppercase font-display'>
              Total per year
            </b>
            <Money
              prefix={
                <>
                  <Underline isDouble />
                </>
              }
            >
              {TOTAL_YEARLY}
            </Money>
          </div>
        </div>
        <div
          className='grow w-6/12 pl-8 h-full overflow-auto'
          style={{ maxHeight: 777 }}
        >
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

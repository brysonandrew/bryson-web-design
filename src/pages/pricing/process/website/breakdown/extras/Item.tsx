import { I } from '@brysonandrew/icons-i';
import { ADD_ICON, REMOVE_ICON } from '@brysonandrew/icons-keys';
import { usePricing } from '@pages/index/pricing/PricingProvider';
import { cx } from 'class-variance-authority';
import { Item as FocusItem } from '../../../focus/Item';
import { FC } from 'react';

type TProps = {
  id: string;
  value: any;
  isN: boolean;
  price: number;
  isValue?: boolean;
  max?: number;
};
export const Item: FC<TProps> = ({
  id,
  value,
  isValue = Boolean(value),
  isN,
  price,
  max = 0,
}) => {
  const { setExtras } = usePricing();
  return (
    <FocusItem id={id}>
      <div
        className={cx(
          'row-space py-1 w-full',
          !isValue && 'text-gray-2',
        )}
      >
        <button
          className={
            isValue ? '' : 'text-gray-2'
          }
          onClick={() => {
            setExtras((prev) => ({
              ...prev,
              [id]: Math.max(0, ~~value - 1),
            }));
          }}
        >
          <I icon={REMOVE_ICON} />
        </button>
        <div className='row gap-2'>
          {/* {isValue ? (
            <Circle isActive>{ALL.indexOf(id) + 1}</Circle>
          ) : null} */}
          <span>{id}</span>
          {isN && value > 0 && (
            <>
              <div className=' whitespace-nowrap'>
                x {value}
              </div>
            </>
          )}
        </div>
        <button
          className=''
          onClick={() => {
            setExtras((prev) => ({
              ...prev,
              [id]: Math.min(max, ~~value + 1),
            }));
          }}
        >
          <I
            icon={isN || !isValue ? ADD_ICON : REMOVE_ICON}
          />
        </button>
      </div>
    </FocusItem>
  );
};

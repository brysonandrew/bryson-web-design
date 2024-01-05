import { I } from '@components/Icon';
import { ADD_ICON, REMOVE_ICON } from '@constants/icons';
import { useServices } from '@context/domains/services';
import clsx from 'clsx';
import { Circle } from '../../../../../components/decoration/Circle';
import { ALL } from '../../config';
import { Item as FocusItem } from '../../../../../components/buttons/focus/Item';
import { Money } from '../../Money';
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
  const { setExtras } = useServices();
  return (
    <FocusItem id={id}>
      <div
        className={clsx(
          'row-space py-1 w-full',
          !isValue && 'text-gray-2',
        )}
      >
        <button
          className={
            isValue ? 'text-color-1' : 'text-gray-2'
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
              <div className='font-display whitespace-nowrap'>
                x {value}
              </div>
            </>
          )}
        </div>
        <button
          className='text-color-1'
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
      {/* <Money classValue={isValue ? '' : 'text-inherit'}>
        {isN && value > 0 ? ~~value * price : price}
      </Money> */}
    </FocusItem>
  );
};

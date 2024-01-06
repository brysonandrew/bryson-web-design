import { FC } from 'react';
import { Money, TProps as TMoneyProps } from '../Money';
import { Underline } from '../Underline';

type TProps = Pick<TMoneyProps, 'children'> & {
  text?: string;
};
export const Price: FC<TProps> = ({ text, children }) => {
  return (
    <div>
      <div className='row-space w-full text-color-2'>
        <span className='uppercase font-display'>
          Price
        </span>
        <Money prefix={<Underline />}>{children}</Money>
      </div>
      <div className='relative w-full'>
        <Underline height='h-px' color='bg-gray' />
      </div>
    </div>
  );
};

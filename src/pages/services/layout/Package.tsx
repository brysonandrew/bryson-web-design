import { P1_5 } from '@components/space/P1_5';
import { P2 } from '@components/space/P2';
import { P3 } from '@components/space/P3';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { End } from './End';
import {
  Price,
  TDiscount,
  TProps as TPriceProps,
} from './price';
import { P_25 } from '@components/space/P_25';
import { P4 } from '@components/space/P4';

export type TProps = TPriceProps &
  PropsWithChildren<{
    title: string;
    color?: string;
    discount?: TDiscount;
  }>;
export const Package: FC<TProps> = ({
  title,
  children,
  color = 'bg-green',
  ...priceProps
}) => {
  return (
    <div className='relative grow w-full'>
      <div
        className={clsx(
          'absolute -inset-0.5 rounded-md',
          color,
        )}
      />
      <div
        className={clsx(
          'relative column items-stretch grow w-full h-full text-base',
        )}
      >
        <P1_5 />
        <End>
          <h4 className='w-full text-main-inverted text-center capitalize text-2xl tracking-wider'>
            {title}
          </h4>
        </End>
        <P1_5 />
        <div className='relative items-stretch h-full bg-main rounded-tl-md rounded-tr-md'>
          <P4 />
          <div className='px-4'>{children}</div>
          <P4 />
        </div>
        <P_25 />
        <div className='relative bg-main rounded-bl-md rounded-br-md'>
          <End>
            <Price {...priceProps} />
          </End>
        </div>
      </div>
    </div>
  );
};

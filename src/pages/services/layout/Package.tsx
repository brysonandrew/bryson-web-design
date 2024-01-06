import { P1 } from '@components/space/P1';
import { P1_5 } from '@components/space/P1_5';
import { P2 } from '@components/space/P2';
import { P3 } from '@components/space/P3';
import { P4 } from '@components/space/P4';
import { Line } from './Line';
import { ThinLineGrow } from '@components/thin-line/ThinLineGrow';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { End } from './End';
import { Price, TProps as TPriceProps } from './Price';
import { Bottom } from './Bottom';
import { P_5 } from '@components/space/P_5';
import { P_25 } from '@components/space/P_25';

export type TProps = TPriceProps &
  PropsWithChildren<{
    title: string;
    color?: string;
    discount?: number
  }>;
export const Package: FC<TProps> = ({
  title,
  price,
  children,
  color = 'bg-green',
  discount
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

        <div className='relative items-stretch h-full background-color-2 rounded-tl-md rounded-tr-md'>
          <P3 />
          <div className='px-4'>{children}</div>
          <P2 />
        </div>
        <P_25 />
        <div className='background-color-2 rounded-bl-md rounded-br-md'>
          <End>
            <Price price={price} />
          </End>
        </div>
      </div>
    </div>
  );
};

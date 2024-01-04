import { TChildren, TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TClassValueProps & {
  children: TChildren | number;
};
export const Circle: FC<TProps> = ({
  classValue,
  children,
}) => {
  return (
    <div
      className={clsx(
        'w-5 h-5 center rounded-full bg-main text-main font-slab text-xs border-gray border',
        classValue,
      )}
    >
      {children}
    </div>
  );
};

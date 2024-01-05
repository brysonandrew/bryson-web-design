import { TChildren, TClassValueProps } from '@t/index';
import { nToMoney } from '@utils/format';
import clsx from 'clsx';
import { FC } from 'react';

export type TProps = TClassValueProps & {
  prefix?: TChildren;
  suffix?: TChildren;
  children: number;
};
export const Money: FC<TProps> = ({
  classValue,
  prefix,
  suffix,
  children,
}) => {
  return (
    <span
      className={clsx(
        'relative font-display whitespace-nowrap',
        classValue ?? 'text-color-1',
      )}
    >
      {prefix}
      {nToMoney(children)}
      {suffix}
    </span>
  );
};

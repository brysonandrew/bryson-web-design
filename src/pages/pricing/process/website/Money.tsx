import { TChildren, TClassValueProps } from '@brysonandrew/base/types/dom';
import { nToMoney } from '@brysonandrew/base/utils/format';
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
        'relative  whitespace-nowrap',
        // classValue ?? '',
      )}
    >
      {prefix}
      {nToMoney(children)}
      {suffix}
    </span>
  );
};

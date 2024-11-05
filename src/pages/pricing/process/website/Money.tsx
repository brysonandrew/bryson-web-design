import { TChildren, TClassValueProps } from '@brysonandrew/config-types/dom';
import { nToMoney } from '@brysonandrew/utils-format';
import { cx } from 'class-variance-authority';
import { FC } from 'react';

export type TMoneyProps = TClassValueProps & {
  prefix?: TChildren;
  suffix?: TChildren;
  children: number;
};
export const Money: FC<TMoneyProps> = ({
  classValue,
  prefix,
  suffix,
  children,
}) => {
  return (
    <span
      className={cx(
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

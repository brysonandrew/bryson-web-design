import { TChildren, TClassValueProps } from '@t/index';
import { nToMoney } from '@utils/format';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TClassValueProps & {
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
        'relative font-display text-baby-blue whitespace-nowrap',
        classValue,
      )}
    >
      {[prefix, nToMoney(children), suffix].filter(Boolean)}
    </span>
  );
};

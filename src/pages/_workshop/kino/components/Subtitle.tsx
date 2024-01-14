import { TChildrenProps, TClassValueProps } from '@lib/types/dom';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TClassValueProps & TChildrenProps;
export const Subtitle: FC<TProps> = ({
  classValue,
  children,
}) => {
  return (
    <kbd className={clsx('text-xl uppercase', classValue)}>
      {children}
    </kbd>
  );
};

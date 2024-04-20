import type { FC } from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { TIProps } from '@brysonandrew/icons-i/config/types';

type TProps = TIProps;
export const I: FC<TProps> = ({ classValue, ...props }) => {
  return (
    <Icon
      className={clsx(
        'relative shrink-0 pointer-event-none',
        classValue,
      )}
      {...props}
    />
  );
};

export * from './config/types';
import type { FC } from 'react';
import { TIconConfig } from '@lib/types/dom/icon';
import clsx from 'clsx';
import { Icon } from '@iconify/react';

type TProps = TIconConfig;
export const I: FC<TProps> = ({
  classValue,
  ...props
}) => {
  return (
    <Icon
      className={clsx(
        'shrink-0 pointer-event-none',
        classValue,
      )}
      {...props}
    />
  );
};

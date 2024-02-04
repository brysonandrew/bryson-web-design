import { TAnchorProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TAnchorProps;
export const Item: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => (
  <li className={clsx(classValue)}>
    <a target='_top' {...props}>
      {children}
    </a>
  </li>
);

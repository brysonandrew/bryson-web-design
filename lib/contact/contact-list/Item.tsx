import { TAnchorProps } from '@brysonandrew/config-types';
import { BAnchor } from '@brysonandrew/interactive';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TAnchorProps;
export const Item: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => (
  <li className={clsx(classValue)}>
    <BAnchor target='_top' {...props}>
      {children}
    </BAnchor>
  </li>
);

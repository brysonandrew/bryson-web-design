import { TChildrenProps } from '@t/index';
import { FC } from 'react';

export const Subtitle: FC<TChildrenProps> = ({
  children,
}) => {
  return <kbd className='text-2xl'>{children}</kbd>;
};

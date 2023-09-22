import { TChildrenProps } from '@t/index';
import { FC } from 'react';

export const Title: FC<TChildrenProps> = ({ children }) => {
  return (
    <kbd className='uppercase text-4xl'>{children}</kbd>
  );
};

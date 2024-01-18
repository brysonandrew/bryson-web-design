import { TChildrenProps } from 'lib/types/dom';
import { FC } from 'react';

export const Title: FC<TChildrenProps> = ({ children }) => {
  return (
    <kbd className='uppercase text-4xl'>{children}</kbd>
  );
};

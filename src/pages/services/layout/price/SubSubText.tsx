import { TClassValueProps } from '@t/index';
import { FC, PropsWithChildren } from 'react';

export const SubSubText: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children }) => {
  return <span className='text-xxs text-color-3'>{children}</span>;
};

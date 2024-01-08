import { TClassValueProps } from '@t/index';
import { FC, PropsWithChildren } from 'react';

export const SubSubText: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children }) => {
  return <span className='text-sm font-sans'>{children}</span>;
};

import { TClassValueProps } from '@t/index';
import { FC, PropsWithChildren } from 'react';

export const Subtext: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children }) => {
  return <span className='text-sm text-color-3 tracking-wide'>{children}</span>;
};

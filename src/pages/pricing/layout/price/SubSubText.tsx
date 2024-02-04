import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import { FC, PropsWithChildren } from 'react';

export const SubSubText: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children }) => {
  return <span className='text-xs font-sans'>{children}</span>;
};

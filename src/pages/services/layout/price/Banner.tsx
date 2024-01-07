import { TClassValueProps } from '@t/index';
import { FC, PropsWithChildren } from 'react';

export const Banner: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children }) => {
  return (
    <div className='row gap-2 absolute left-1/2 bottom-full -translate-x-1/2 translate-y-1/2 bg-red px-1.75 py-1.5 text-main-inverted text-xl rounded-md whitespace-nowrap uppercase'>
      {children}
    </div>
  );
};

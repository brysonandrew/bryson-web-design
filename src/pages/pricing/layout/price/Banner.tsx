import { TClassValueProps } from '@lib/types/dom';
import { FC, PropsWithChildren } from 'react';

export const Banner: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children }) => {
  return (
    <div className='row gap-2 absolute left-1/2 bottom-full -translate-x-1/2 translate-y-2/5 bg-red px-2 py-1 text-main-inverted text-xl rounded-md whitespace-nowrap uppercase'>
      {children}
    </div>
  );
};

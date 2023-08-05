import { TChildren } from '@t/index';
import { FC } from 'react';

type TProps = {
  children: TChildren;
};
export const RightBottom: FC<TProps> = ({ children }) => {
  return (
    <div className='absolute left-full top-full translate-x-2 -translate-y-0'>
      {children}
    </div>
  );
};

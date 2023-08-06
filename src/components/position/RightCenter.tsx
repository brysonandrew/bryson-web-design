import { TChildren } from '@t/index';
import { FC } from 'react';

type TProps = {
  children: TChildren;
};
export const RightCenter: FC<TProps> = ({ children }) => {
  return (
    <div className='absolute left-full top-1/2 translate-x-4 -translate-y-1/2'>
      {children}
    </div>
  );
};

import { TChildren } from '@t/index';
import { FC } from 'react';

export const LEFT_TOP_LG = {
  top: -40,
  left: -40,
};
export const LEFT_TOP_MD = {
  top: -28,
  left: -28,
};
type TProps = {
  children: TChildren;
};
export const LeftTop: FC<TProps> = ({ children }) => {
  return (
    <div className='absolute right-full bottom-full -translate-x-2 -translate-y-0'>
      {children}
    </div>
  );
};

import { TChildren } from '@t/index';
import { FC } from 'react';
export const RIGHT_TOP_LG = {
  top: -40,
  left: 40,
}
export const RIGHT_TOP_MD = {
  top: -28,
  left: 28,
}
type TProps = {
  children: TChildren;
};
export const RightTop: FC<TProps> = ({ children }) => {
  return (
    <div className='absolute left-full bottom-full translate-x-2 -translate-y-0'>
      {children}
    </div>
  );
};

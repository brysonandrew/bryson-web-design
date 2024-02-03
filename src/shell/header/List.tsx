import { FC } from 'react';
import { TChildren } from '@brysonandrew/config/types';

type TProps = { children: TChildren };
export const List: FC<TProps> = ({ children }) => {
  return (
    <ul className='column-stretch gap-2.5 header-title md:(row-stretch gap-2.5)'>
      {children}
    </ul>
  );
};

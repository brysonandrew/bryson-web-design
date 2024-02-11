import { FC } from 'react';
import { TChildren } from '@brysonandrew/config-types';

type TProps = { children: TChildren };
export const List: FC<TProps> = ({ children }) => {
  return (
    <ul className='header-title column-stretch gap-2.5 md:row-stretch'>
      {children}
    </ul>
  );
};

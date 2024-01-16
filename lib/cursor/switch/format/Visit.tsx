import { TDivProps } from '@lib/types/dom';
import type { FC } from 'react';

type TProps = TDivProps;
export const Visit: FC<TProps> = ({ children }) => {
  return (
    <div>
      Visit <span className='text-gray'>{children}</span>
    </div>
  );
};

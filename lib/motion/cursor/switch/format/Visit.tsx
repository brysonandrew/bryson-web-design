import { TDivProps } from '@brysonandrew/config-types/dom';
import type { FC } from 'react';

type TProps = TDivProps;
export const Visit: FC<TProps> = ({ children }) => {
  return (
    <div>
      Visit <span className='title-main'>{children}</span>
    </div>
  );
};

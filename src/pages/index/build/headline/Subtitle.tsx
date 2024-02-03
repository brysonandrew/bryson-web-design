import { TElementProps } from '@brysonandrew/config/types';
import type { FC } from 'react';

type TProps = TElementProps;
export const Subtitle: FC<TProps> = ({ children }) => {
  return (
    <h3 className='relative column uppercase text-main text-lg char-gap-4 lg:(text-xl char-gap-8)'>
      {children}
    </h3>
  );
};

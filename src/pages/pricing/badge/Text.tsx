import type { FC, PropsWithChildren } from 'react';

type TProps = PropsWithChildren;
export const Text: FC<TProps> = ({ children }) => {
  return (
    <span className='pricing-title leading-0.5'>
      {children}
    </span>
  );
};

import type { FC, PropsWithChildren } from 'react';

type TProps = PropsWithChildren;
export const Text: FC<TProps> = ({ children }) => {
  return (
    <span className='font-semibold text-white-7 capitalize leading-0.5'>
      {children}
    </span>
  );
};

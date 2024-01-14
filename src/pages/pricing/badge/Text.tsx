import type { FC, PropsWithChildren } from 'react';

type TProps = PropsWithChildren;
export const Text: FC<TProps> = ({ children }) => {
  return (
    <span className='font-semibold text-black-9 capitalize leading-0'>
      {children}
    </span>
  );
};

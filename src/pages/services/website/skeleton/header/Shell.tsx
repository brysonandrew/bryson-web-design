import { FC, PropsWithChildren } from 'react';
import { HEADER } from '../../config';
import { Focus } from '../../Focus';

export const Shell: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <header className='relative row-space w-full px-8 h-12 bg-black rounded-md'>
      <Focus>{HEADER}</Focus>
      {children}
    </header>
  );
};

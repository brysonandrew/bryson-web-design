import { FC, PropsWithChildren } from 'react';
import { HEADLINE } from '../../config';
import { Focus } from '../../Focus';

export const Shell: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='relative h-48 column-start-center px-8 w-full bg-black rounded-md'>
      <Focus>{HEADLINE}</Focus>
      {children}
    </div>
  );
};

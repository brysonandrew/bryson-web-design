import { FC, PropsWithChildren } from 'react';

export const Shell: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='relative h-48 column-start-center px-8 w-full bg-main rounded-md'>
      {children}
    </div>
  );
};

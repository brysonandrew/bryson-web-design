import { FC, PropsWithChildren } from 'react';

export const Shell: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='relative w-full h-48 column-start'>
      <div className='w-full px-2 h-12 bg-black rounded-t-lg'></div>
      <div className='row-start gap-4 w-full h-36'>
        {children}
      </div>
    </div>
  );
};

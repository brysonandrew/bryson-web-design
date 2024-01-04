import { FC, PropsWithChildren } from 'react';

export const View: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='w-full h-full py-4 bg-white rounded-lg'>
      {children}
    </div>
  );
};

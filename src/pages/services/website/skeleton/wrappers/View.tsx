import { FC, PropsWithChildren } from 'react';

export const View: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='py-2 bg-white rounded-lg'>
      {children}
    </div>
  );
};

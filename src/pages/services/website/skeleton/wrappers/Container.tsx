import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='column gap-4 w-3/4 mx-auto'>
      {children}
    </div>
  );
};

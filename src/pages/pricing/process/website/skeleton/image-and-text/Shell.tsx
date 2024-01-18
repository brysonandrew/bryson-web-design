import { useApp } from 'lib/context/app/useApp';
import { FC, PropsWithChildren } from 'react';

export const Shell: FC<PropsWithChildren> = ({
  children,
}) => {
  const { BORDER_RADIUS } = useApp();
  return (
    <div className='relative w-full h-48 column-start'>
      <div
        className='w-full px-2 h-12 bg-main'
        style={{
          borderTopLeftRadius: BORDER_RADIUS.LG,
          borderTopRightRadius: BORDER_RADIUS.LG,
        }}
      />
      <div className='row-start gap-4 w-full h-36'>
        {children}
      </div>
    </div>
  );
};

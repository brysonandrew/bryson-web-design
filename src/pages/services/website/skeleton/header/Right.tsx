import { I } from '@components/Icon';
import clsx from 'clsx';
import { FC, PropsWithChildren, useContext } from 'react';
import { Context } from '../context';

export const Right: FC<PropsWithChildren> = ({
  children,
}) => {
  const { isDarkModeReversed } = useContext(Context);
  const icon =
    typeof isDarkModeReversed !== 'boolean' ? null : (
      <I
        icon={
          isDarkModeReversed
            ? 'ph:moon-fill'
            : 'ph:sun-fill'
        }
      />
    );

  return (
    <div className='relative row gap-4'>
      {children}
      {icon}
      <div className={clsx('h-2 w-8 bg-main-inverted')} />
    </div>
  );
};

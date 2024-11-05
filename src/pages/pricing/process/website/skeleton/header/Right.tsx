import { I } from '@brysonandrew/icons-i';
import { cx } from 'class-variance-authority';
import { FC, PropsWithChildren, useContext } from 'react';
import { Context } from '../context';

export const Right: FC<PropsWithChildren> = ({
  children,
}) => {
  const { isDarkMode } = useContext(Context);
  const icon =
    typeof isDarkMode !== 'boolean' ? null : (
      <I
        icon={
          isDarkMode
            ? 'ph:moon-fill'
            : 'ph:sun-fill'
        }
      />
    );

  return (
    <div className='relative row gap-4'>
      {children}
      {icon}
      <div className={cx('h-2 w-8 bg-main-inverted')} />
    </div>
  );
};

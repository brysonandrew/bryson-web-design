import clsx from 'clsx';
import { Sound } from './Sound';
import { DarkMode } from './DarkMode';
import { isMobile } from 'react-device-detect';
import { FC } from 'react';
import { TDivProps } from '@brysonandrew/config-types';

type TProps = TDivProps;
export const Settings: FC<TProps> = (props) => {
  return (
    <div
      className={clsx('row z-10', !isMobile && 'gap-1')}
      {...props}
    >
      <DarkMode />
      {!isMobile && <Sound />}
    </div>
  );
}; 

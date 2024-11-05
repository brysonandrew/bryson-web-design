import { cx } from 'class-variance-authority';
import { Sound } from './Sound';
import { isMobile } from 'react-device-detect';
import { FC } from 'react';
import { TDivProps } from '@brysonandrew/config-types';
import { DarkMode } from '@brysonandrew/interactive';

type TProps = TDivProps;
export const Settings: FC<TProps> = (props) => {
  return (
    <div
      className={cx(
        'row-stretch z-10',
        !isMobile && 'gap-1'
      )}
      {...props}
    >
      <DarkMode />
      <div className="grow w-[1px] bg-accent-02" />
      {!isMobile && <Sound />}
    </div>
  );
};

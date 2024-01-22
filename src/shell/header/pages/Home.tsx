import { DURATION } from '@brysonandrew/animation';
import { ThickLine } from '@brysonandrew/base/components';
import { I } from '@brysonandrew/icons';
import { HOME_ICON } from '@brysonandrew/icons/constants/base';
import clsx from 'clsx';
import { TPageLinkComponent } from './config';

export const Home: TPageLinkComponent = ({ isActive }) => {
  return (
    <>
      <I
        classValue={clsx(
          'inline-flex h-5 w-5 mb-1',
          isActive && 'title-main',
        )}
        icon={HOME_ICON}
      />
      {isActive && (
        <ThickLine
          classValue='top-3/4 right-1.5 w-2 h-2'
          layoutId='PAGE_ACTIVE_UNDERLINE_KEY'
          transition={{ duration: DURATION * 2 }}
        />
      )}
    </>
  );
};

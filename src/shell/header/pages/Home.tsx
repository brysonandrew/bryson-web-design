import { DURATION } from '@app/animation';
import { I } from '@brysonandrew/icons-i';
import { HOME_ICON } from '@brysonandrew/icons-keys/base';
import { ThickLine } from '@brysonandrew/layout-line';
import { cx } from 'class-variance-authority';
import { TPageLinkComponent } from './config';

export const Home: TPageLinkComponent = ({ isActive }) => {
  return (
    <>
      <I
        classValue={cx(
          'inline-flex h-5 w-5 mb-1',
          isActive && 'title-main'
        )}
        icon={HOME_ICON}
      />
      {isActive && (
        <ThickLine
          classValue="top-3/4 right-1.5 w-2 h-0"
          layoutId="PAGE_ACTIVE_UNDERLINE_KEY"
          transition={{ duration: DURATION * 2 }}
        />
      )}
    </>
  );
};

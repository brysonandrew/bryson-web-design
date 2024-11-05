import {
  TButtonMotionProps,
  TInteractiveProps,
} from '@brysonandrew/config-types';
import { I } from '@brysonandrew/icons-i';
import { cx } from 'class-variance-authority';
import { FC } from 'react';
import { B } from './B';

type TProps = TButtonMotionProps & {
  isActive?: boolean;
  icon: string | JSX.Element;
} & TInteractiveProps;
export const BSm: FC<TProps> = ({
  isActive,
  icon,
  shape = 'interactive-rect-sm',
  look,
  classValue,
  children,
  ...props
}) => {
  return (
    <B
      classValue={cx(
        isActive && 'interactive-active',
        classValue,
      )}
      shape={shape}
      look={look}
      {...props}
    >
      <>
        {typeof icon === 'string' ? (
          <I icon={icon} />
        ) : (
          icon
        )}
        {children}
      </>
    </B>
  );
};

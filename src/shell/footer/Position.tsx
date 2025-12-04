import { cx } from 'class-variance-authority';
import { FC } from 'react';
import { TDivProps } from '@brysonandrew/config-types';

type TProps = TDivProps & {
  position: 'left-10' | 'right-6';
};
export const Position: FC<TProps> = ({
  children,
  position,
  classValue,
  ...props
}) => {
  return (
    <div
      className={cx(
        'absolute bottom-6 z-10',
        position,
        classValue,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

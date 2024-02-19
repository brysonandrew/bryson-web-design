import clsx from 'clsx';
import { FC } from 'react';
import { TDivProps } from '@brysonandrew/config-types';

type TProps = TDivProps & {
  position: 'left-6' | 'right-6';
};
export const Position: FC<TProps> = ({
  children,
  position,
  classValue,
  ...props
}) => {
  return (
    <div
      className={clsx(
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

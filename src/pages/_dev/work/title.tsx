import type { FC } from 'react';
import { TElementProps } from '@brysonandrew/config-types';
import clsx from 'clsx';

type TProps = TElementProps;
export const WorkTitle: FC<TProps> = ({
  children,
  classValue,
  ...props
}) => {
  return (
    <div className="relative column-stretch mb-2.25 pr-4">
      <h2
        className={clsx(
          'pointer-events-none',
          'text-lg text-gray-1 uppercase',
          classValue
        )}
        {...props}
      >
        {children}
      </h2>
      <hr className="absolute -left-2 top-full border-black-9 border-t w-full h-0" />
    </div>
  );
};

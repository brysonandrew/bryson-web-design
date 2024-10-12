import type { FC } from 'react';
import {
  TDivProps,
  TPropsWithChildren,
} from '@brysonandrew/config-types';
import clsx from 'clsx';

type TProps = TDivProps & {
  isActive?: boolean;
  background?: TDivProps;
};
export const WorkItemBox: FC<TProps> = ({
  children,
  isActive,
  classValue,
  background = {},
  ...props
}) => {
  const { classValue: backgroundClassValue } = background;
  return (
    <div
      className={clsx(
        'row py-1 px-2',
        isActive ? 'text-blue' : 'text-gray',
        classValue
      )}
      {...props}
    >
      <div
        className={clsx(
          'absolute inset-0 border rounded-md',
          isActive
            ? 'border-gray-5 bg-black-4'
            : 'border-transparent bg-black-6',
          backgroundClassValue
        )}
      />
      {children}
    </div>
  );
};

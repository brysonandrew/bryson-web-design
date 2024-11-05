import type { FC } from 'react';
import { TElementProps } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import { TIconsSvgProps } from '@brysonandrew/svg-icon';

type TProps = TElementProps & { Icon?: FC<TIconsSvgProps> };
export const WorkTitle: FC<TProps> = ({
  children,
  classValue,
  Icon,
  ...props
}) => {
  return (
    <div className="relative column-stretch mb-2.25 pr-4">
      <div className="row gap-2">
        {Icon && <Icon />}
        <h2
          className={cx(
            'pointer-events-none',
            'text-lg text-gray-1 uppercase',
            classValue
          )}
          {...props}
        >
          {children}
        </h2>
      </div>
      <hr className="absolute -left-2 top-full border-black-9 border-t w-full h-0" />
    </div>
  );
};

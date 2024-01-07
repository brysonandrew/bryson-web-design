import clsx from 'clsx';
import type { FC } from 'react';

type TProps = { time?: Date };
export const Time: FC<TProps> = ({ time }) => {
  return (
    <h6
      className={clsx(
        'relative text-right shrink-0 text-left text-g-tb text-lg md:text-xl',
      )}
    >
      {typeof time === 'undefined'
        ? 'Present'
        : new Intl.DateTimeFormat('en-UK', {
            month: 'short',
            year: 'numeric',
          }).format(time)}
    </h6>
  );
};

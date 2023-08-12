import clsx from 'clsx';
import type { FC } from 'react';
import {
  TTextXsProps,
  TextXs,
} from '@components/text/TextXs';

type TProps = { time?: Date } & TTextXsProps;
export const Time: FC<TProps> = ({
  time,
  classValue,
  ...props
}) => {
  return (
    <TextXs
      classValue={clsx(
        'relative text-right shrink-0',
        classValue,
      )}
      {...props}
    >
      {typeof time === 'undefined'
        ? 'Present'
        : new Intl.DateTimeFormat('en-UK', {
            month: 'short',
            year: 'numeric',
          }).format(time)}
    </TextXs>
  );
};

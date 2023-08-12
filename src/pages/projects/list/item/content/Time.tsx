import {
  TTextXsProps,
  TextXs,
} from '@components/text/TextXs';
import clsx from 'clsx';
import type { FC } from 'react';

type TProps = { time?: Date } & TTextXsProps;
export const Time: FC<TProps> = ({
  time,
  classValue,
  ...props
}) => {
  return (
    <TextXs
      layout='position'
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

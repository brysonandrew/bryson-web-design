import { TextXs } from '@components/text/TextXs';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { FC } from 'react';

type TProps = { time?: Date; classValue?: ClassValue };
export const Time: FC<TProps> = ({ time, classValue }) => {
  const className = clsx(
    'relative mt-0.5',
    classValue,
  );
  if (!time)
    return (
      <TextXs classValue={className} >
        Present
      </TextXs>
    );
  return (
    <TextXs classValue={className} >
      {typeof time === 'undefined'
        ? 'Present'
        : new Intl.DateTimeFormat('en-UK', {
            month: 'short',
            year: 'numeric',
          }).format(time)}
    </TextXs>
  );
};

import { Drag } from '@components/icons/Drag';
import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => (
  <Drag
    className={clsx(
      'relative -top-0.375 text-teal-bright',
      classValue,
    )}
  />
);

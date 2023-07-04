import { Drag } from '@components/icons/Drag';
import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => (
  <div
    className={clsx(
      'flex items-center absolute h-full text-teal-bright',
      classValue,
    )}
  >
    <Drag />
  </div>
);

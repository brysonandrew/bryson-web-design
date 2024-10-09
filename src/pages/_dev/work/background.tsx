import { useWorkState } from '@pages/_dev/work/context';
import clsx from 'clsx';
import type { FC } from 'react';

export const WorkBackground: FC = () => {
  const { isQ } = useWorkState();

  return (
    <div
      className={clsx(
        'absolute -inset-0.5 rounded-md',
        isQ
          ? 'bg-black-2 group-hover:bg-black-5'
          : 'bg-black'
      )}
    />
  );
};

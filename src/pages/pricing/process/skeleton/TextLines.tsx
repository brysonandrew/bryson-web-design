import { TClassValueProps } from '@brysonandrew/types/dom/main';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = {
  count?: number;
  height?: 'h-12' | 'h-8' | 'h-4' | 'h-2' | 'h-1' | 'h-0.5';
  gap?: 'gap-2' | 'gap-1' | 'gap-0.5';
} & TClassValueProps;
export const TextLines: FC<TProps> = ({
  count = 5,
  gap = 'gap-2',
  height = 'h-2',
  classValue,
}) => {
  return (
    <ul className={clsx('column w-full', gap)}>
      {[...Array(count)].map((_, index) => (
        <li
          key={`${index}`}
          className={clsx(
            'w-full',
            height,
            classValue ?? 'bg-main',
          )}
        />
      ))}
    </ul>
  );
};

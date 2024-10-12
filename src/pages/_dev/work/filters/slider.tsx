import type { FC } from 'react';
import { TClassValueProps, TInputMotionProps, TInputProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export type TFiltersSliderProps = TInputProps & TClassValueProps & {
  orient?: 'vertical' | 'horizontal';
};
export const FiltersSlider: FC<TFiltersSliderProps> = ({
  style,
  classValue,
  orient = 'horizontal',
  ...props
}) => {
  const isVertical = orient === 'vertical';

  return (
    <input
      type="range"
      className={clsx(
        'relative rounded-lg border border-gray',
        'appearance-none',
        'truncate',
        '[&::-webkit-slider-runnable-track]:(bg-gray opacity-40)',
        '[&::-webkit-slider-thumb]:shadow-[60px_0px_0px_60px_rgba(17,17,17,1)]',
        isVertical
          ? '[&::-webkit-slider-thumb]:(w-2.8 h-1.6)'
          : '[&::-webkit-slider-thumb]:(w-2.8 h-2.8)',
        '[&::-webkit-slider-thumb]:(relative bg-gray appearance-none pointer-cursor z-0)',
        classValue
      )}
      {...props}
    />
  );
};

import { FC } from 'react';
import {
  TPartialBrightenConfigOptions,
  resolveBrightenProps,
} from '@brysonandrew/motion/filter/utils/brighten';
import { FilterAnimate } from '@brysonandrew/motion/filter';

export const Brighten: FC<
  TPartialBrightenConfigOptions
> = ({ children, ...options }) => {
  return (
    <FilterAnimate {...resolveBrightenProps(options)}>
      {children}
    </FilterAnimate>
  );
};

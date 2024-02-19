import { FC } from 'react';
import {
  TPartialBrightenConfigOptions,
  resolveBrightenProps,
} from '@brysonandrew/filter-animate/utils/brighten';
import { FilterAnimate } from '@brysonandrew/filter-animate';

export const Brighten: FC<
  TPartialBrightenConfigOptions
> = ({ children, ...options }) => {
  return (
    <FilterAnimate {...resolveBrightenProps(options)}>
      {children}
    </FilterAnimate>
  );
};

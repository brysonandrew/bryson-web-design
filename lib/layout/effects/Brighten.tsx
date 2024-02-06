import { FC } from 'react';
import {
  TPartialBrightenConfigOptions,
  resolveBrightenProps,
} from '@brysonandrew/filter-animate/utils/brighten';
import { FilterAnimate } from '@brysonandrew/filter-animate';

export type TBrightenProps = TPartialBrightenConfigOptions;
export const Brighten: FC<TBrightenProps> = ({
  children,
  ...options
}) => {
  return (
    <FilterAnimate {...resolveBrightenProps(options)}>
      {children}
    </FilterAnimate>
  );
};

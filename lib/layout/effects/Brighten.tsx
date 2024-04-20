import {
  TPartialBrightenConfigOptions,
  FilterAnimate,
  resolveBrightenProps,
} from '@brysonandrew/motion-filter';
import { FC } from 'react';

export const Brighten: FC<
  TPartialBrightenConfigOptions
> = ({ children, ...options }) => {
  return (
    <FilterAnimate {...resolveBrightenProps(options)}>
      {children}
    </FilterAnimate>
  );
};

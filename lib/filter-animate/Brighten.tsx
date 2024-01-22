import { FilterAnimate } from '.';
import { FC } from 'react';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from '@brysonandrew/types/dom/main';
import {
  TPartialBrightenConfigOptions,
  resolveBrightenProps,
} from '@brysonandrew/filter-animate/utils/brighten';

export type TBrightenProps = TPartialBrightenConfigOptions &
  TClassValueProps &
  TChildrenPartialProps;
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

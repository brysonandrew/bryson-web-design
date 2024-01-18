import { FilterAnimate } from '.';
import { FC } from 'react';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from 'lib/types/dom/main';
import {
  TPartialBrightenConfigOptions,
  resolveBrightenProps,
} from 'lib/animation/components/filter-animate/utils/brighten';

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

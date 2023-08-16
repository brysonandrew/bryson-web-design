import { FilterAnimate } from '.';
import { FC } from 'react';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from '@t/index';
import {
  TPartialDimConfigOptions,
  resolveBrightenProps,
} from '@utils/effects/brighten';

type TProps = TPartialDimConfigOptions &
  TClassValueProps &
  TChildrenPartialProps;
export const Brighten: FC<TProps> = ({
  children,
  ...options
}) => {
  return (
    <FilterAnimate {...resolveBrightenProps(options)}>
      {children}
    </FilterAnimate>
  );
};

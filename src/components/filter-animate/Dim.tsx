import { FilterAnimate } from '.';
import { FC } from 'react';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from '@t/index';
import {
  TPartialDimConfigOptions,
  resolveDimProps,
} from '@utils/effects/dim';

type TProps = TPartialDimConfigOptions &
  TClassValueProps &
  TChildrenPartialProps;
export const Dim: FC<TProps> = ({
  children,
  ...options
}) => {
  return (
    <FilterAnimate {...resolveDimProps(options)}>
      {children}
    </FilterAnimate>
  );
};

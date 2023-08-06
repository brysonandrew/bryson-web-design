import {
  TPartialGlowConfigOptions,
  resolveGlowProps,
} from '@utils/effects/glow';
import { FilterAnimate } from '.';
import { FC } from 'react';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from '@t/index';

type TProps = TPartialGlowConfigOptions &
  TClassValueProps &
  TChildrenPartialProps;
export const Glow: FC<TProps> = ({
  children,
  ...options
}) => {
  return (
    <FilterAnimate {...resolveGlowProps(options)}>
      {children}
    </FilterAnimate>
  );
};

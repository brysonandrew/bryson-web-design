import {
  TPartialGlowConfigOptions,
  resolveGlowProps,
} from '@lib/utils/effect/glow';
import { FilterAnimate } from '.';
import { FC } from 'react';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from '@lib/types/dom/main';

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

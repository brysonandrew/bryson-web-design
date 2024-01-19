import {
  TPartialGlowConfigOptions,
  resolveGlowProps,
} from '@brysonandrew/lib/animation/components/filter-animate/utils/glow';
import { FilterAnimate } from '.';
import { FC } from 'react';

export type TGlowProps = TPartialGlowConfigOptions;
export const Glow: FC<TGlowProps> = ({
  children,
  ...options
}) => {
  return (
    <FilterAnimate {...resolveGlowProps(options)}>
      {children}
    </FilterAnimate>
  );
};

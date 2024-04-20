import {
  FilterAnimate,
  resolveGlowProps,
  TGlowConfig,
} from '@brysonandrew/motion-filter';
import { FC } from 'react';

export const Glow: FC<TGlowConfig> = ({
  children,
  ...options
}) => {
  return (
    <FilterAnimate {...resolveGlowProps(options)}>
      {children}
    </FilterAnimate>
  );
};

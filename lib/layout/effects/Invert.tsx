import { TFilterAnimateProps, FilterAnimate } from '@brysonandrew/filter-animate';
import {
  TPartialInvertConfigOptions,
  resolveInvertProps,
} from '@brysonandrew/filter-animate/utils/invert';
import { FC } from 'react';

export type TInvertProps = TPartialInvertConfigOptions &
  TFilterAnimateProps;
export const Invert: FC<TInvertProps> = ({
  children,
  ...options
}) => {
  const props = resolveInvertProps(options);
  return (
    <FilterAnimate {...props}>{children}</FilterAnimate>
  );
};

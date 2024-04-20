import {
  TFilterAnimateProps,
  FilterAnimate,
  resolveInvertProps,
  TPartialInvertConfigOptions,
} from '@brysonandrew/motion-filter';
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

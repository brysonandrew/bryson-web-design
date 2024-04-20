import { TFilterAnimateProps, FilterAnimate } from '@brysonandrew/motion/filter';
import {
  TPartialInvertConfigOptions,
  resolveInvertProps,
} from '@brysonandrew/motion/filter/utils/invert';
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

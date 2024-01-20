import {
  TPartialInvertConfigOptions,
  resolveInvertProps,
} from '@brysonandrew/filter-animate/utils/invert';
import { FilterAnimate, TFilterAnimateProps } from '.';
import { FC } from 'react';
import { TChildrenPartialProps } from '@brysonandrew/base/types/dom/main';

type TProps = TPartialInvertConfigOptions &
  TFilterAnimateProps &
  TChildrenPartialProps;
export const Invert: FC<TProps> = ({
  children,
  ...options
}) => {
  const props = resolveInvertProps(options);
  return (
    <FilterAnimate {...props}>{children}</FilterAnimate>
  );
};
